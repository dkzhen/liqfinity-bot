const axios = require("axios");
const fs = require("fs");
const path = require("path");
const generateRandomEmail = require("./randomEmail");

async function register() {
  try {
    const email = generateRandomEmail();
    const data = {
      password: "Bandulan113@",
      email: email,
      referrerCode: "U12518",
    };

    const response = await axios.post(
      "https://api.testnet.liqfinity.com/v1/auth/register",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Registration successful:", response.data);

    // Path to the accounts.json file
    const filePath = path.join(__dirname, "accounts.json");

    let accounts = [];
    if (fs.existsSync(filePath)) {
      // Read the existing data from accounts.json
      const fileData = fs.readFileSync(filePath, "utf8");
      accounts = fileData ? JSON.parse(fileData) : [];
    }

    // Add the new email to the accounts array
    accounts.push({ email });

    // Write the updated accounts back to the file
    fs.writeFileSync(filePath, JSON.stringify(accounts, null, 2), "utf8");
    console.log("Email added to accounts.json");
  } catch (error) {
    console.error(
      "Error during registration:",
      error.response
        ? JSON.stringify(error.response.data, null, 2)
        : error.message
    );
  }
}

module.exports = register;
