const db = require("../../../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');
const { authUser, authAdmin } = require('../../auth');
const cookieParser = require('cookie-parser')
const path = require('path');
const { dirname } = require("path");

const JWT_SECRET = "my_secret_key"; // Replace with your own secret key

module.exports = (router) => {

  router.use(cookieParser());

  // Signup new user
  router.post("/signup", async (req, res) => {
    try {
      // Hash password with bcrypt
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const resetTimestamp = new Date();

      // Create new user with hashed password
      const newUser = await db.getModel("User").create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        userType: 'free',
        monthlyCounter: 0,
        authKey: uuidv4(),
        resetTime: resetTimestamp
      });

      return res.status(201).send(newUser);
    } catch (err) {
      console.error(err);
      return res.status(500).send();
    }
  });

  // Login existing user
  router.post("/login", async (req, res) => {
    try {
      // Find user by username
      const user = await db.getModel("User").findOne({
        email: req.body.email,
      });

      if (!user) {
        return res.status(401).send({
          message: "Invalid username or password",
        });
      }

      // Compare password with bcrypt
      const isPasswordValid = await bcrypt.compare( req.body.password,  user.password);

      if (!isPasswordValid) {
        return res.status(401).send({ 
          message: "Invalid username or password",
        });
      }

      // Create JWT token with user ID
      const token = jwt.sign({ id: user._id }, JWT_SECRET);

      res.cookie(`frtkn/v1/`, token);

      return res.send({ user: user.username });
    } catch (err) {
      console.error(err);
      return res.status(500).send();
    }
  });

  //================================

  // Update user by ID (requires JWT authentication)
  router.put("/users/:id", authUser, async (req, res) => {
    try {

      // Check if token matches user ID
      if (req.currentUser.id !== parseInt(req.params.id, 10)) {
        return res.status(401).send({ message: "Unauthorized user action" });
      }

      // Hash password with bcrypt (if provided)
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
      }

      // Update user and return updated document (repeated query)
      const updatedUser = await db.getModel("User").findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
      );

      if (!updatedUser) {
        return res.status(400).send();
      }

      return res.send(updatedUser);
    } catch (err) {
      console.error(err);
      return res.status(500).send();
    }
  });

  // Gets using info
  router.get("/info", async (req, res) => {
    try {

      const token = req.cookies[`frtkn/v1/`];
      const decodedToken = jwt.verify(token, JWT_SECRET);

      // Delete user and return deleted document
      const user = await db.getModel("User").findById(decodedToken.id);

      if (!user) {
        return res.status(400).send();
      }

      return res.send({
        authKey: user.authKey,
        limitCount: user.monthlyCounter,
        userType: user.userType,
        userEmail: user.email,
        username: user.username,
      });

    } catch (err) {
      console.error(err);
      return res.status(500).send();
    }
  });

  // Delete user by ID (requires JWT authentication) (ONLY ADMIN CAN DELETE USERS)
  router.delete("/users/:id", authAdmin, async (req, res) => {
    try {

      // Delete user and return deleted document
      const deletedUser = await db.getModel("User").findByIdAndDelete(req.params.id);

      if (!deletedUser) {
        return res.status(400).send();
      }

      return res.send({ message: "User deleted successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).send();
    }
  });


  router.get("/logout", async (req, res) => {
    res.cookie(`frtkn/v1/`, "", { expires: new Date() });
    res.redirect('/');
    res.sendFile(path.join(dirname(dirname(__dirname)), 'public', 'index.html'))
  });

};
