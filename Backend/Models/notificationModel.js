import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    link: { type: String, default: null }, // URL to navigate if needed
    read: { type: Boolean, default: false },
  }, { timestamps: true });
  
export default mongoose.model('Notification', NotificationSchema);

  