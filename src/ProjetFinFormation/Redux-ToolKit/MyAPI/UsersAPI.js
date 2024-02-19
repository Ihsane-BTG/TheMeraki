const express = require('express');
const fs = require('fs');
const cors = require('cors'); 

const app = express();
const port = 3001;

app.use(cors());

const jsonData = JSON.parse(fs.readFileSync('Users.json', 'utf-8'));

app.get('/api/data', (req, res) => {
    res.json(jsonData);
});

app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const entry = jsonData.find(item => item.id === id);

    if (entry) {
        res.json(entry);
    } else {
        res.status(404).json({ error: 'Entry not found' });
    }
});

app.get('/', (req, res) => {
    res.json(jsonData);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
