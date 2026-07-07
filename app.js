const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");

const app = express();
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongo_url);
}

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

app.listen(3000, () => {
  console.log("Your Server is Online");
});

app.get("/", (req, res) => {
  res.send("This is your Home Page");
});

//index route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index", { allListings });
});

//new route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

//show route
app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show", { listing });
  }),
);

//create route
app.post(
  "/listings",
  wrapAsync(async (req, res) => {
    if (!req.body.listing) {
      throw new ExpressError(400, "Send Valid Data for listing");
    }
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  }),
);

//edit route
app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  }),
);

//update route
app.put(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    if (!req.body.listing) {
      throw new ExpressError(400, "Send Valid Data for listing");
    }
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  }),
);

//delete route
app.delete(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
  }),
);

// Catch-all for 404 Not Found - must be before the final error handler
app.use((req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});
// Error handling middleware (MUST be at the end)
app.use((err, req, res, next) => {
  let { status = 500, message = "something went wrong" } = err; // Corrected typo: messsage to message
  res.status(status).render("error.ejs", { message });
  // res.status(status).send(message);
});
