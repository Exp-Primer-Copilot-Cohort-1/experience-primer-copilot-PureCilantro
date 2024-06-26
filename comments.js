// Create web server
// 1. Require express
// 2. Create an instance of express
// 3. Define a route to get comments
// 4. Start the server
// 5. Test the server

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.send('Comments route');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// 5. Test the server
// Open http://localhost:3000/comments in your browser and you should see the text "Comments route".