const mongoose = require('mongoose');


const classificationSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true 
  },
},
{
  collection: 'classification'
});

module.exports = classificationSchema;
