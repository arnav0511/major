const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ResumeBuilder = require('./utils/ResumeBuilder'); // Adjust the path if needed
const CaptionGenerator = require('./utils/CaptionGenerator'); // Adjust the path if needed

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://dbuser:PG0d4QbPp46HHmOq@resume-app.r9kc7.mongodb.net/?retryWrites=true&w=majority&appName=resume-app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/resume', async (req, res) => {
  try {
    const resumeData = req.body; // Get data from the client
    const generatedResume = await ResumeBuilder.generate(resumeData); // Call your ResumeBuilder API
    res.json(generatedResume);
  } catch (error) {
    res.status(500).json({ error: 'Error generating resume' });
  }
});

app.post('/api/caption', async (req, res) => {
  try {
    const captionData = req.body; // Get data from the client
    const generatedCaption = await CaptionGenerator.generate(captionData); // Call your CaptionGenerator API
    res.json(generatedCaption);
  } catch (error) {
    res.status(500).json({ error: 'Error generating caption' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
