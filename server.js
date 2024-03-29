const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");
const users = require("./routes/api/users");
const events = require("./routes/api/events");
const auth = require("./routes/api/auth");
const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = config.get("mongoURI");
const port = process.env.PORT || 6000;

// Connect to Mongo

mongoose
  .connect(process.env.MONGODB_URI || db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// User routes
app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/events", events);

// Step 3
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html")); // relative path
  });
}

app.listen(port, () => console.log(`Server started on port ${port}`));
