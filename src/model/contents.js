import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Content", ContentSchema);
