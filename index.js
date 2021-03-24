const express = require("express");


// const rootCall = (req, res) => {
//     res.send("thank you node js")
// }


const app = express();

app.get("/", (req, res) => {
    res.send("thank you node js")
});

app.listen(3000, () => console.log("3000 port is listening"));

// ekta ghotona ase..node ekbar run korle abar notun kisu add krle sheta auto update hoy na
// notun kore command likhte hoy..ctrl C diye off kore then abar run korte hoy..