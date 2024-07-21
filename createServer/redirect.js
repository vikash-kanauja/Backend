const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, this is the home page!');
});

// Redirect from '/old-route' to '/new-route'
app.get('/old-route', (req, res) => {
  res.redirect('/new-route');
});

// Define the new route
app.get('/new-route', (req, res) => {
  res.send('This is the new route!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
