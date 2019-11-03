const translate = require('node-google-translate-skidz');
const express = require ('express');
const cors = require('cors')
app = express();

const PORT = process.env.PORT || 7000

app.use(cors())
app.listen(PORT,()=>{
    console.log('Server started successfully')
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





