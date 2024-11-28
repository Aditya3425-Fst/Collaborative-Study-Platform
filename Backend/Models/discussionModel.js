import mongoose from "mongoose";

const DiscussionSchema = new mongoose.Schema({
    studyGroup: { type: mongoose.Schema.Types.ObjectId, ref: 'StudyGroup', required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    replies: [{
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      message: { type: String },
      createdAt: { type: Date, default: Date.now },
    }],
  }, { timestamps: true });
  
export default mongoose.model('Discussion', DiscussionSchema);
  