const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    const htmlFile = path.join(__dirname, '/src/index.html');
    res.sendFile(htmlFile)
})

//localhost:8080
app.listen(port, () => {
    console.info(`rodando a aplicação na ${port}`)
});