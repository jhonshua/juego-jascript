const bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

const app = express();

const DIST_DIR = path.join(__dirname, '/dist');

app.use(express.static(DIST_DIR));
app.get("*",  (req, res)=> {
    res.sendFile(path.join(__dirname + "/index.html"));
  });

app.listen(3000,()=>{
    console.log("servidor up port ",3000)
});




