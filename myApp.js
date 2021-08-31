let express = require('express');
let bodyParser = require("body-parser");
const {query} = require("express");
let app = express();

app.get("/",function (req,res){
        // Normal usage
        //app.use(express.static(__dirname + "/public"));

        // Assets at the /public route
        app.use("/public", express.static(__dirname + "/public"));
    res.sendFile(__dirname + "/views/index.html");
    }
);
// app.get("/", (req, res) => {
//     console.log(process.env.MESSAGE_STYLE);
//     let response = "Hello json";
//     if (process.env.MESSAGE_STYLE === "uppercase") {
//         response = response.toUpperCase();
//     }
//     res.json({
//         message: process.env.MESSAGE_STYLE
//     });
// });
app.get("/now",(req,res,next) =>{
    req.time = new Date().toString()
    console.log(req.time);
    next();
}, function(req, res) {
    res.json({
        time: req.time
    })
})
app.get('/:word/echo',((req, res, next) =>{
    res.json({
        echo: req.params.word
    })
    }
))
// app.get("/name", ((req, res, next) => {
//     var firstname = req.query.first;
//     var lastname= req.query.last;
//     res.json({
//         name: `${firstname} ${lastname}`
//     })
// }));
app.post("/name", bodyParser.urlencoded({ extended: false }),((req, res, next) => {
    console.log(req);
    var firstname = req.body.first;
    var lastname= req.body.last;
    res.json({
        name: `${firstname} ${lastname}`
    })
}))
app.use(bodyParser.urlencoded({ extended: false }))

module.exports = app;
