// Backend Server - School-Mate App
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to School-Mate API!' });
});

// Listen on port 5000
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
