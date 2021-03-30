const express = require("express");
const mongoose = require("mongoose");

//Connect to MongoDB instance
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dictionaryDB", { useNewUrlParser: true, useFindAndModify: false });

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Register API router
app.use(require("./routes/api-routes.js"));

//Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});