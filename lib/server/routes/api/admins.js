const db = require("../../../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const JWT_SECRET = "my_secret_key"; // Replace with your own secret key

module.exports = (router) => { 
  // Signup new user
  router.post("/admin/signup", async (req, res) => {
    try {
      // Hash password with bcrypt
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      // Create new user with hashed password
      const newUser = await db.getModel("Admin").create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });

      return res.status(201).send(newUser);
    } catch (err) {
      console.error(err);
      return res.status(500).send();
    }
  });

  // Login existing user
  router.post("/admin/login", async (req, res) => {
    try {
      // Find user by username
      const user = await db.getModel("Admin").findOne({
        username: req.body.username,
      });

      if (!user) {
        return res.status(401).send({
          message: "Invalid username or password",
        });
      }

      // Compare password with bcrypt
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password,
      );

      if (!isPasswordValid) {
        return res.status(401).send({
          message: "Invalid username or password",
        });
      }

      // Create JWT token with user ID
      const token = jwt.sign({ id: user._id }, JWT_SECRET);

      return res.send({ user: user.username, token });
    } catch (err) {
      console.error(err);
      return res.status(500).send();
    }
  });

  //====================== (requires JWT authentication)
  

  router.put("/admin/:id", async (req, res) => {
    try {
      // Verify JWT token
      const authHeader = req.headers.authorization;
      const token = authHeader.split(" ")[1];
      const decodedToken = jwt.verify(token, JWT_SECRET);

      // Check if token matches user ID
      if (decodedToken.id !== parseInt(req.params.id, 10)) {
        return res.status(401).send({ message: "Unauthorized" });
      }

      // Hash password with bcrypt (if provided)
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
      }

      // Update user and return updated document (repeated qeury)
      const updatedUser = await db.getModel("Admin").findByIdAndUpdate(
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

  // Delete user by ID 
  router.delete("/admin/:id", async (req, res) => {
    try {
      // Verify JWT token
      const authHeader = req.headers.authorization;
      const token = authHeader.split(" ")[1];
      const decodedToken = jwt.verify(token, JWT_SECRET);

      // Check if token matches user ID
      if (decodedToken.id !== parseInt(req.params.id, 10)) {
        return res.status(401).send({ message: "Unauthorized" });
      }

      // Delete user and return deleted document
      const deletedUser = await db.getModel("Admin").findByIdAndDelete(
        req.params.id,
      );
      if (!deletedUser) {
        return res.status(400).send();
      }
      return res.send(deletedUser);
    } catch (err) {
      console.error(err);
      return res.status(500).send();
    }
  });
  
};
