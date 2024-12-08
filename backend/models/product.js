
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  dateOfSale: Date,
  sold: Boolean,
  category: String,
  image: { type: String, required: false }, // Add image field (URL or path)
});

module.exports = mongoose.model('Productsnew', ProductSchema);
