const mongoose = require('mongoose');


const usersSchema = new mongoose.Schema({
  email: { 
    type: String,
    required: true 
  },
  username: { 
    type: String,
    required: true 
  },
  password: { 
    type: String,
    required: true 
  },
  userType: { 
    type: String,
    required: true 
  },
  authKey: { 
    type: String,
  }
},
{
  collection: 'users'
});

module.exports = usersSchema;