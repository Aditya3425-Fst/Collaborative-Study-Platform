import mongoose from "mongoose";

const studySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Group creator
    resources: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }], // Shared files or links
  }, { timestamps: true });
  
export default mongoose.model('StudyGroup', studySchema);
  