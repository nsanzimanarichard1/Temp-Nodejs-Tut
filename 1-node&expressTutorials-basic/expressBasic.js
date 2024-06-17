const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './navbar/navigation.html'),
    (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
    });
});

app.all('*', (req, res) => {
    res.status(404).send('Page Not Found');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000!');
});
