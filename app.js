const express = require('express');
var path = require('path'); s
const app = express();
const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/src//index.html")
})
app.use(express.static(path.join(__dirname, 'src/styles/global.css')));

//localhost:8080
app.listen(port, () => {
    console.info(`rodando a aplicação na ${port}`)
});