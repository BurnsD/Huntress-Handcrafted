const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/huntress-handcrafted', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.conection;