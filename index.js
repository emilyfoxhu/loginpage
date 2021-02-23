//express module 
var express = require('express');
//express app
var app = express();

//view engine is set to ejs
app.set('view engine','ejs');

//render to html
//app.engine('html', require('ejs').renderFile);

//setting the login page of views
app.set('views','./views');

//path of static login
app.use(express.static(__dirname + '/public')); 

app.get('/', (req, res) => {
    res.render('loginPage');
});
var server = app.listen(3000, function () {
    console.log("Server listening on port 3000");
});
