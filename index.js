const express = require('express');

const app = express();

const genre = [{id:1,category:'Drama'}]

const port = process.env.PORT || 3433
app.listen(port,()=> console.log(`listening at ${port}`));

app.get('/genre', (req,res) => {
    return res.status(200).send(genre);
})

