const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

const rotas = require("./servicos");
app.use(rotas);

app.listen(port, () => {
    console.log('Servidor ouvindo porta ${port}');
});