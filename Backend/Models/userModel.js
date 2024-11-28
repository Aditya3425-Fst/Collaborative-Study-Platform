const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  avatar: { type: String, default: null }, // Profile picture URL
  role: { type: String, enum: ['student', 'teacher', 'admin'], default: 'student' },
  bio: { type: String, default: '' },
  socialLinks: [{ platform: String, link: String }], // e.g., LinkedIn, Twitter
  studyGroups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'StudyGroup' }],
}, { timestamps: true });

export default mongoose.model('User', UserSchema);
