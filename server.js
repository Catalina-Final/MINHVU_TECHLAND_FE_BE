const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  connectDB = require("./config/db"),
  usersRoutes = require("./routes/api/users"),
  authRoutes = require("./routes/api/auth"),
  postsRoutes = require("./routes/api/posts"),
  profileRoutes = require("./routes/api/profile");

// connect to the db
connectDB();

// init middleware
app.use(express.json({ extended: false })); // get the data in req.body

// define routes
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/profile", profileRoutes);

app.listen(port, () => console.log(`server's listening on port ${port}`));
