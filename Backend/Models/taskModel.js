import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date, required: true },
    assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Members responsible
    studyGroup: { type: mongoose.Schema.Types.ObjectId, ref: 'StudyGroup', required: true },
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  }, { timestamps: true });
  
export default mongoose.model('Task', TaskSchema);

  