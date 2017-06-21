var express = require("express");
var app = express();
app.use(express.static("public")); //all file load from here
app.set("view engine","ejs");
app.set("views","./views");
app.listen(80);

app.get("/",function(req,res){
  res.render("home");
});
