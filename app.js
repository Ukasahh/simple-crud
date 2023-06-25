const express = require("express");
const cors  = require('cors');
const route  = require( './routes/index.js');

const {
    HTTP_PORT = 5000
} = process.env;

const app = express();
app.use(cors());
app.use(express.json());
app.use(route);

// 500
app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).json({
        status: false,
        message: err.message,
        data: null
    });
});

app.listen(HTTP_PORT, () => console.log('running on port', HTTP_PORT));


module.exports = app;