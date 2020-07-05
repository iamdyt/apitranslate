const translate = require('node-google-translate-skidz');
const express = require ('express');
const cors = require('cors')
const path = require('path')

app = express();
app.use(cors())
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const PORT = process.env.PORT || 7000


app.get('/', (req,res)=>{
  res.render('index')
})


app.get('/translate/:text/:source/:target', (req,res)=>{

    const {text,source, target} = req.params;

    translate({
        text: text,
        source: source,
        target: target
      }, function(result) {
        res.send(result);
      });

})

app.get('/translate/:text/:target', (req,res)=>{

  const {text,source, target} = req.params;

  translate({
      text: text,
      source: 'auto',
      target: target
    }, function(result) {
      res.send(result);
    });

})

app.listen(PORT,()=>{
  console.log('Server started successfully')
})



