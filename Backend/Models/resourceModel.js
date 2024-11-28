import mongoose from "mongoose";

const ResourceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: '' },
    type: { type: String, enum: ['file', 'link'], required: true },
    link: { type: String, required: function () { return this.type === 'link'; } }, // URL if it's a link
    filePath: { type: String, required: function () { return this.type === 'file'; } }, // Path if it's a file
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    studyGroup: { type: mongoose.Schema.Types.ObjectId, ref: 'StudyGroup' },
  }, { timestamps: true });
  
export default mongoose.model('Resource', ResourceSchema);
  