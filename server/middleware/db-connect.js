import mongoose from 'mongoose';

mongoose.connect(`mongodb+srv://Sergey_V:${process.env.ADMIN_PASSWORD}@cluster0-tzob7.azure.mongodb.net/bio?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});


export default mongoose.connection;
