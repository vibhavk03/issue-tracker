const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    raisedBy: {
      type: String,
      default: '-',
    },
    assignee: {
      type: String,
      default: 'Not assigned yet',
    },
  },
  {
    timestamps: true,
  }
);

const Issue = new mongoose.Model('Issue', issueSchema);

module.exports = Issue;
