const express = require("express");
const helloRoute = require("./routes/index");

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
app.use("/", helloRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
