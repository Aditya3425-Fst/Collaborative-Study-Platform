import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: '' },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    studyGroup: { type: mongoose.Schema.Types.ObjectId, ref: 'StudyGroup', required: true },
  }, { timestamps: true });
  
export default mongoose.model('Event', EventSchema);
  