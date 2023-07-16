const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lml:17071998wd@cluster0.fi82vwm.mongodb.net/shoes?retryWrites=true&w=majority');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log(" DB Connected...");
});

module.exports = db