const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: String,
      trim: true,
      required: true,
    },
    issues: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Project = new mongoose.model('Project', projectSchema);

module.exports = Project;
