const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome");
});

// require('./a')(app);
const logger = require('./app/middleware/logger');

app.get('/register', (req, res) => {
    res.send("Register Page");
});

app.use(logger);

app.use('/user', require('./app/route/userRoute'));
app.use('/client', require('./app/route/clientRoute'));
app.use('/role', require('./app/route/roleRoute'));

app.all('*', (req, res) => {
    res.send("404 Not Found");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});