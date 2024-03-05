const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

if (process.env.NODE_ENV === 'dev') {
    dotenv.config({path: path.join(__dirname, './.env')});
} else if(process.env.NODE_ENV === 'test') {
    dotenv.config({path: path.join(__dirname, './.env.test')});
} else if(process.env.NODE_ENV === 'production') {
    dotenv.config({path: path.join(__dirname, './.env.production')});
}

// express app 적용
const app = express();

app.get("/", (req, res) => res.send(`${process.env.TEST_DATA} + TEST_AAAA`));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
