let express = require('express');
let app = express();

// app.get("/",function (req,res){
//         // Normal usage
//         //app.use(express.static(__dirname + "/public"));
//
//         // Assets at the /public route
//         app.use("/public", express.static(__dirname + "/public"));
//     res.sendFile(__dirname + "/views/index.html");
//     }
// );
app.get("/json", (req, res) => {

    let response = "Hello json";
    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = response.toUpperCase();
    }
    res.json({
        message: process.env.MESSAGE_STYLE
    });
});

module.exports = app;
