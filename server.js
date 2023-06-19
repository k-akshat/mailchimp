const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/' , (req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.post('/' , (req,res)=>{
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    const bmi = weight/(height*height)

    res.send("Your BMI result is " + bmi);
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
