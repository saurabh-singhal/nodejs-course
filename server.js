const express= require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
//app.use(express_static(__dirname+'/public'));
/*
app.use(function(req,res,next)
{
  res.render('test.hbs');
});
*/
app.get('/',function(req,res)
{
  res.render('home.hbs',{
    text:'saurabh singhal',
    welcome:'welcome'
  });
});

app.get('/about',function(req,res)
{
  res.render('home.hbs',{
    text:'saurabh singhal 2',
    welcome:'welcome'
  });
});

app.listen(port);
