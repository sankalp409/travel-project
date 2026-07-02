const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    url: {
      type: String,
      default:
        "https://images.pexels.com/photos/38233907/pexels-photo-38233907.jpeg",
      set: (v) =>
        v === ""
          ? "https://images.pexels.com/photos/38233907/pexels-photo-38233907.jpeg"
          : v,
    },
    filename: String,
  },
  price: {
    type: Number,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
