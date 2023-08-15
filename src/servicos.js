const express = require('express');

const {
    getMensagem, setMensagem,
    setMensagemQuery, setMensagemPath,
} = require("./mensagemrecurso");

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode": 200,
        "mensagem": "API Mensagem Rodando"
    })
});

router.get('/mensagem', getMensagem);

router.post('/mensagem', setMensagem);

router.get('/mensagemquery', setMensagemQuery);

router.get('/mensagempath/:mensagem', setMensagemPath);

module.exports = router;



