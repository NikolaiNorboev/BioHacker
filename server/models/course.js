import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  user: {
    type: mongoose.ObjectId,
    ref: 'User',
  },
  program: {
    type: mongoose.ObjectId,
    ref: 'Program',
  },
  startDate: {
    type: String,
    default: new Date(new Date().getTime() + 3 * 3600 * 1000).toUTCString().replace(/ GMT$/, ''),
  },
  description: String,
  statistics: [{
    date: String,
    result: {
      type: Boolean,
      default: false,
    },
  }],
});

export default mongoose.model('Course', courseSchema);
