import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// OpenAI Configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Profile Schema
const profileSchema = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  skills: [String],
  experience: [String],
  projects: [String],
  certifications: [String],
});

const Profile = mongoose.model('Profile', profileSchema);

// Routes
app.get('/api/profile', async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching profile' });
  }
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const profile = await Profile.findOne();

    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    // Create context from profile data
    const context = `
      Name: ${profile.name}
      Title: ${profile.title}
      Description: ${profile.description}
      Skills: ${profile.skills.join(', ')}
      Experience: ${profile.experience.join(', ')}
      Projects: ${profile.projects.join(', ')}
      Certifications: ${profile.certifications.join(', ')}
    `;

    // Generate response using OpenAI
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are an AI assistant that provides information about ${profile.name}. Use the following context to answer questions: ${context}`,
        },
        {
          role: 'user',
          content: message,
        },
      ],
      max_tokens: 150,
    });

    const response = completion.data.choices[0].message?.content;
    res.json({ response });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Error processing chat message' });
  }
});

// Admin routes
app.post('/api/admin/profile', async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Error creating profile' });
  }
});

app.put('/api/admin/profile/:id', async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Error updating profile' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 