const express = require('express');
const path = require('path')

const app = express();
const PORT = 4000;
app.listen(PORT, (req, res) => {
    console.log('server is running')
});

app.get("/", (req, res) => {
    //res.send('<h1>hello world</h1><h1>sub heading</h1>')
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

app.get('/list/:id', (req, res) => {
    console.log(req.params.id)
    res.sendFile(path.join(__dirname, 'public', 'todo.html'))
})


// app.use(express.static(path.join(__dirname,'public')))
