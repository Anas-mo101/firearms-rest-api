const mongoose = require("mongoose");
const firearms = require("./data.json");
const firearmsSchema = require('../../schemas/firearms');
const mongooseAutoIncrement = require('mongoose-auto-increment');

//connect mongoose
mongoose.connect(
  "mongodb://admin:admin@localhost:27017/firearmsdb?authSource=admin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
)
.catch((err) => {
  console.log(err.stack);
  process.exit(1);
})
.then(() => {

  const connection = mongoose.connection;

  mongooseAutoIncrement.initialize(connection);

  firearmsSchema.plugin(mongooseAutoIncrement.plugin, { model: 'Firearm', startAt: 1 });

  const model = connection.model('Firearm', firearmsSchema);

  firearms.map(async (p, index) => {
    try {
      console.error(index + "/" + firearms.length);
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
