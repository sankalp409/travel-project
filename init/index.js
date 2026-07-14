const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");

const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongo_url);
}
const initDb = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6a4f2f7aafdf09a5b88dfe45",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data initialized successfully!");
};

initDb();
