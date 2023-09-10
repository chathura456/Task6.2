const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Jenkins!');
});

app.get('/shutdown', (req, res) => {
    res.send('Server shutting down...');
    process.exit(0);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

