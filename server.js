const express = require('express');
const hbs = require('hbs');
var app = express();
//app.set('view engine', 'hbs');
const port=process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/partial')
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear()
});
hbs.registerHelper('Capt',(text)=>{
  return text.toUpperCase();
});
hbs.registerHelper('qwe',([string=''])=>{
  return string.toLowerFirst();
});
app.get('/',(req,res)=>{
  res.render('home.hbs',{
    pageTitle:'Home Page',
    welcomeMessage:'Welcome to my Assignment'
  });
});
app.get('/Agriculture',(req,res)=>{
  res.render('Agriculture.hbs',{
      pageTitle:'Agriculture Types',
  });
});
app.get('/pgdetails',(req,res)=>{
  res.render('pgdetails.hbs',{
      pageTitle:'Agriculture types details',
  });
});
app.get('/updation',(req,res)=>{
  res.render('updation.hbs',{
    pageTitle:'Updation file',
  })
})
app.get('/bad', (req, res) => {
  res.send({
  errorMessage: 'Unable to handle request'
  });
});

app.listen(port, () => {
  console.log('Server is up on port $ {port}');
});

