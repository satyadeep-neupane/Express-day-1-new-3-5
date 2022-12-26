const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome");
});

// require('./a')(app);
app.use(require('./app/route/userRoute'));
app.use(require('./app/route/clientRoute'));
app.use(require('./app/route/roleRoute'));

app.all('*', (req, res) => {
    res.send("404 Not Found");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});