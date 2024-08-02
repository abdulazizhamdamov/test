const express = require('express');
const dotenv = require("dotenv")
dotenv.config()


let app = express();



app.listen(9000, () => {
    console.log(9000);
});
