const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('client'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(4000, () => console.log('Server up on 4000'));