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
  events: [{
    start: String, // new Date(01.08.20 14:00),
    end: String, // new Date(01.08.20 14:00)
    title: String,
    result: {
      type: Number,
      default: 0,
    },
    allDay: {
      type: Boolean,
      default: false,
    },
  }],
  currentEvent: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model('Course', courseSchema);
