const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  job: String,
  linkedin: String,
  github: String,
  imageUrl: String,
  about: String,
  skills: [String],
  abilities: [String],
  experience: [
    {
      date: String,
      company: String,
      role: String,
      activities: String,
    },
  ],
  education: [
    {
      title: String,
      university: String,
      date: String,
    },
  ],
  certifications: [
    {
      title: String,
      description: String,
    },
  ],
});

const ModelClass = mongoose.model('profile', profileSchema);

module.exports = ModelClass;
