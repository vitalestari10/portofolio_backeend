const mongoose = require("mongoose");

const portfolioItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    default: ""
  },
  technologies: {
    type: [String], // contoh: ["React", "Node.js", "MongoDB"]
    default: []
  },
  link: {
    type: String, // misalnya URL ke GitHub atau demo
    default: ""
  }
}, { timestamps: true });

module.exports = mongoose.model("PortfolioItem", portfolioItemSchema);
