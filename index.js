const translate = require('node-google-translate-skidz');
const express = require ('express');
app = express();

const PORT = process.env.PORT || 7000

app.listen(PORT,()=>{
    console.log('Server started successfully')
})

app.get('/translate/:text/:target', (req,res)=>{

    const {text,source, target} = req.params;

    translate({
        text: text,
        source: 'en',
        target: target
      }, function(result) {
        res.send(result);
      });

})





