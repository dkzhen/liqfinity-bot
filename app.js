const express = require("express");
const app = express();
const PORT = 2100;
const cron = require("node-cron");
const register = require("./src/register");

// Middleware untuk parsing JSON dan URL-encoded data

cron.schedule("* * * * *", async () => {
  console.log("Running registration task...");
  await register();
});
// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
