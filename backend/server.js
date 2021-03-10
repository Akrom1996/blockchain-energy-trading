const express = require("express")
const app = express()

const router = require("./components/route")


port = 4000
app.use(express.json());

app.use("/route", router)
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.listen(port, () => console.log(("Server is working on port " + port)))