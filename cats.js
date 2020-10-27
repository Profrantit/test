// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:3000/test', { useNewUrlParser: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   // we're connected!
// });
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB!'))
  .catch(error => console.log(error.message));

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

var george = new Cat({
  name: "George",
  age: 11,
  temperament: "Grouchy"
});
george.save(function (err, cat) {
  if (err) {
    console.log("Something went wrong")
  } else {
    console.log("You just saved a cat to the database")
    console.log(cat)
  }
});
