var express = require('express')
var app = express()
var path = require('path');
var Router = require('./routes/router')
var articlesRouter = require("./routes/articles");
var tagsRouter = require("./routes/tag");



app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users',Router)


app.use('/articles',articlesRouter);
app.use("/tags",tagsRouter);

app.listen(3000, function(){
    console.log("Le serveur est en ecoute")
})