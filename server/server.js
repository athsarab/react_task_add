const app = require('./app');
const port = 3001;
const host = 'localhost';

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});