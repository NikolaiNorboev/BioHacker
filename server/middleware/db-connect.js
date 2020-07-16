import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/blank', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});


export default mongoose.connection;
