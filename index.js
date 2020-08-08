const express = require('express');

const app = express();

app.get('/',(req, res, next) => {
 res.send({status: 'ok'})
})
app.listen(3000, function(){
    console.log('Server listening on port:3000...')
})
