const mongoose = require('mongoose');


const firearmSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true 
  },
  classification: { 
    type: String,
  },
  serviceYear: { 
    type: Number 
  },
  origin: { 
    type: String 
  },
  manufacturers: { 
    type: String
  },
  operators: { 
    type: String
  },
  overallLength: {
    type: Number 
  },
  barrelLength: {
    type: Number 
  },
  emptyWeight: {
    type: Number 
  },
  sights: {
    type: String
  },
  actions: {
    type: String
  },
  caliber: {
    type: String
  },
  rounds: {
    type: String
  },
  rateOfFire: {
    type: Number
  },
  muzzleVelocity: {
    type: String
  },
  variants: {
    type: [
      String
    ]
  },
  roles: {
    type: String
  },
},
{
  collection: 'firearms'
});

module.exports = firearmSchema;
