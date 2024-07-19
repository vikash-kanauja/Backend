const express = require('express');
const app = express();
const port = 3000;

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

// Route to serve home page
app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1><p>Welcome to the home page.</p>');
});

// Route to serve about page
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>This is the about page.</p>');
});

app.get('/json', (req, res) => {
    res.json({
        message: 'Hello, World!',
        timestamp: new Date(),
    });
});

// Catch-all route for 404
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});
