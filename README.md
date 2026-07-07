# 🌍 Wanderlust - Travel Listing Platform (Major Project)

Hey! 👋 Welcome to my major project, **Wanderlust**.

This is a full-stack web application I'm building to get hands-on experience with the MERN stack (specifically MEN: MongoDB, Express, and Node.js right now). It's essentially an Airbnb clone where users can explore different travel destinations, check out pricing, and see location details.

Building this has been a massive learning curve—going from basic HTML/CSS to wrestling with database models and server-side validations, but it's finally coming together! 🚀

---

## ✨ What I've Built (Features)

- **CRUD Operations:** Full ability to Create, Read, Update, and Delete travel listings.
- **MVC Architecture:** Kept the codebase clean by separating Models, Views, and Controllers (mostly! still organizing).
- **Robust Error Handling:** Added custom error classes (`ExpressError`) and asynchronous error wrapping (`wrapAsync`) so the server doesn't crash every time a user does something weird.
- **Data Validation:** Implemented server-side schema validation (using `schema.js`) to ensure junk data doesn't get saved to the database.
- **EJS Templating:** Using layouts, partials (like navbars and footers), and boilerplate code to keep the frontend DRY (Don't Repeat Yourself).

---

## 🛠️ Tech Stack & Tools

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose ODM
- **Frontend:** HTML, CSS, JavaScript (DOM manipulation), Bootstrap 5
- **Templating:** EJS (Embedded JavaScript), EJS-Mate

---

## 📂 Project Structure

Here is a quick look at how I've organized the code under the hood:

MAJOR PROJECT/
├── init/ # Dummy data and DB initialization script
├── models/ # Mongoose schemas (listing.js)
├── public/ # Static assets (custom CSS, client-side JS scripts)
├── utils/ # Utility functions (wrapAsync.js, ExpressError.js)
├── views/ # EJS templates (listings CRUD, boilerplate layouts, error pages)
├── app.js # The main server file and entry point
├── schema.js # Server-side validation schemas (Joi)
└── package.json # Node dependencies
