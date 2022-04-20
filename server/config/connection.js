const mongoose = require('mongoose');

// removed useFindAndModify because it's no longer supported
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/huntress-handcrafted', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;