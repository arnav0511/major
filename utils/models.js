const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  skills: String,
  certifications: String,
  projectTitle: String,
  projectDescription: String,
  technologiesUsed: String,
  language: String,
  proficiency: String,
  additionalInfo: String,
});

// Optimized Resume Schema
const optimizedResumeSchema = new mongoose.Schema({
  originalResumeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Resume' },
  optimizedData: Object, // Store the optimized data structure
});

// Content Post Schema
const contentPostSchema = new mongoose.Schema({
  title: String,
  content: String,
});

// Create Models
const Resume = mongoose.model('Resume', resumeSchema);
const OptimizedResume = mongoose.model('OptimizedResume', optimizedResumeSchema);
const ContentPost = mongoose.model('ContentPost', contentPostSchema);

module.exports = { Resume, OptimizedResume, ContentPost };
