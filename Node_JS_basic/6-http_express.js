const express = require('express')
const app = express()
const axios = require("axios");
const port = 3000

// app.get("https://cat-fact.herokuapp.com", (req, res) => {
//     console.log('reponse from cat', res)
//   res.send("Hello Wod!");
// });


// The route definition
app.get("/cat-users", async (req, res) => {
  try {
    // Fetching data from the external API
    const response = await axios.get("https://catfact.ninja");

    // Sending the data back to the client
    res.json(response.data);
  } catch (error) {
    // Basic error handling
    console.error("Error fetching cat users:", error.message);
    res.status(500).json({
      error: "Failed to fetch data from the Cat Facts API",
      details: error.message,
    });
  }
});

// app.listen(PORT, () => {
//   console.log(`Server is purring on http://localhost:${PORT}/cat-users`);
// });

app.listen(port, () => {
    console.log(` App is listening on port ${port}`)
})