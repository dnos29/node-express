const express = require('express');

const app = express();
const PORT = 3000;

app.get('/',(req, res, next) => {
 res.send({status: 'ok'})
})
app.listen(PORT, function(){
    console.log(`Server listening on port:${PORT}...`)
})
