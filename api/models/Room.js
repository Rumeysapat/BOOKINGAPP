import mongoose from 'mongoose';
const { Schema } = mongoose;

const RoomScema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },

    //[{number:101,unavailableDates:[01.05.2022,02.05.2022]}]
    roomNumbers: [
      {
        number: Number,
        unavailableDates: { type: [Date] },
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model('Room', RoomScema);
