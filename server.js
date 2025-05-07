const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

// App
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/hello', (req, res) => {
    res.send('Now, Use hello endpoint!');
})

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})