const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.sendFile(__dirname, "/src/index.html")
})

//localhost:8080
app.listen(port, () => {
    console.info(`rodando a aplicação na ${port}`)
});