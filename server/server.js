const express = require("express");
const dotenv = require("dotenv");
const initRoutes = require("./src/routes/index");

dotenv.config();
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


initRoutes(app);


const port = process.env.PORT || 3333;
app.listen(port, () => {
    console.log("Servers runs successfully!");
});
