import mongoose from 'mongoose';

const programSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  items: [{
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    dosage: {
      quantityOneTime: Number,
      medicationPerDay: Number,
    },
  }],
  linkToCart: {
    type: String,
  },
});

export default mongoose.model('Program', programSchema);
