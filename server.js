const express=require("express");
const bodyparser=require("body-parser");

const app =express();
app.use(bodyparser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});


app.post("/",function(req,res){
  var n1= Number(req.body.number1);
  var n2= Number(req.body.number2);
  var result=(n1/(n2*n2)*10000); //BMI CALUCLATOR FORMULAE IN Centimeters (kg/m^2)*10000;
  res.send("the BMI value is"+"_"+result);
});
app.listen(3000,function(){
  console.log("server started on port 3000;");
});
