const mongoose = require("mongoose");
const firearms = require("./data.json");
const firearmsSchema = require('../../schemas/firearms');

//connect mongoose
mongoose.connect("mongodb://admin:admin@mongo:27017/firearmsdb?authSource=admin")
.catch((err) => {
  console.log(err.stack);
  process.exit(1);
})
.then(() => {

  const connection = mongoose.connection;
  const model = connection.model('Firearm', firearmsSchema);

  firearms.map(async (p, index) => {
    try {
      console.log(index + "/" + firearms.length);
      await model.create(p);
      if (index === firearms.length - 1) {
        console.log("DONE!");
        mongoose.disconnect();
        process.exit(1);
      }
    } catch (err) {
      console.error(err);
    }
  });

  
});
