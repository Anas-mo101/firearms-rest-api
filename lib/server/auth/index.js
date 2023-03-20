const db = require("../../db");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "my_secret_key";

async function authAdmin(req, res, next) {
    try{
        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1];
        const decodedToken = jwt.verify(token, JWT_SECRET);

        db.getModel("Admin").findById(decodedToken.id).then(user => {
            if (!user) {
                return res.status(401).send({
                    'status': 'Unauthorized Request'
                });
            }

            req.currentAdmin = user;

            next();
        });
    } catch(e) {
        console.error(err);
        return res.status(500).send({ message: "Authorization Error" });
    }
}

async function authUser(req, res, next) {   
    try{
        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1];
        const decodedToken = jwt.verify(token, JWT_SECRET);

        db.getModel("User").findById(decodedToken.id).then(user => {
            if (!user) {
                return res.status(401).send({
                    'status': 'Unauthorized Request'
                });
            }

            req.currentUser = user;

            next();
        });
    } catch(e) {
        console.error(err);
        return res.status(500).send({ message: "Authorization Error" });
    }
}


async function validateCall(req, res, next) {
    try{
        const apiKey = req.header('x-api-key');

        if (!apiKey) {
            return res.status(400).send({
                'status': 'No API Key Provided'
            });
        }
        
        db.getModel('User').findOne({authKey: apiKey}).then(user => {

            if (!user) {
                return res.status(400).send({
                    'status': 'Invalid API Key Provided'
                });
            }

            const pastTime = new Date(user.resetDay);
            const now = new Date();

            const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
            const timeDiffInMs = now.getTime() - pastTime.getTime();

            if(timeDiffInMs >= thirtyDaysInMs){
                // reset counter
                user.monthlyCounter = 0;
                user.resetDay = new Date();
            }
    
            if(user.userType === 'free'){
                if(user.monthlyCounter >= 5000 ){
                    return res.status(400).send({
                        'status': 'Monthly limit is reached'
                    });
                }
            } else if (user.userType === 'premium'){
                if(user.monthlyCounter >= 10000 ){
                    return res.status(400).send({
                        'status': 'Monthly limit is reached'
                    });
                }
            }
    
            // increament counter
            user.monthlyCounter++;

            user.save(function (err) {
                if(err) return res.status(500).send({ message: "Authorization Error" });
            });

            next();
        });
    } catch(e) {
        console.error(err);
        return res.status(500).send({ message: "Authorization Error" });
    }
}

module.exports = {
    validateCall,
    authUser,
    authAdmin
}