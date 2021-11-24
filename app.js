const express = require('express');
const config = require('config');
const app = express();

app.use(express.json({ extended: true }))
app.use('/api', require('./routes/api.routes'));

const PORT = config.get('port') || 5000;

async function start() {
    try {
        app.listen(PORT, () => console.log(`App started on port ${PORT}`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();

