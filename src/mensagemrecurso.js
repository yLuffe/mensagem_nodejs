const Mensagem = require("./mensagem");
/*
 Gera saída em JSON da mensagem.
*/
const getMensagem = async (request, response) => {
    console.log("Executando serviço getMensagem.");
    //Instancia a mensagem
    const mensagem = Mensagem.getInstancia();
    response.status(200).json({ mensagem: mensagem.getMensagem() });
};
/*
* Modifica a mensagem através dos dados da requisição recebidos
* como parâmetro de corpo do tipo JSON.
*/
const setMensagem = async (request, response) => {
    console.log("Executando serviço setMensagem.");
    //Recupera os parâmetros
    const mensagemParam = request.body.mensagem
    //Instancia a mensagem
    const mensagem = Mensagem.getInstancia();
    //Modifica a mensagem
    mensagem.setMensagem(mensagemParam);
    // Retorno da mensagem
    response.status(200).json({ mensagem: mensagemParam });
};
/**
* Modifica a mensagem através de dados da requisição recebidos
* como parâmetro de consulta na URL.
*/
const setMensagemQuery = async (request, response) => {
    console.log("Executando serviço setMensagemQuery.");
    //Recupera os parâmetros
    const mensagemQuery = request.query.mensagem
    console.log("mensagemQuery: " + mensagemQuery)
    //Instancia a mensagem
    const mensagem = Mensagem.getInstancia();
    //Modifica a mensagem
    mensagem.setMensagem(mensagemQuery);
    // Retorno da mensagem
    response.status(200).json({ mensagem: mensagemQuery });
};
/**
* Modifica a mensagem através de dados da requisição recebidos
* como parâmetro de path na URL.
*/
const setMensagemPath = async (request, response) => {
    console.log("Executando serviço setMensagemPath");
    //Recupera os parâmetros
    const mensagemPath = request.params.mensagem
    console.log("mensagemPath: " + mensagemPath)
    //Instancia a mensagem
    const mensagem = Mensagem.getInstancia();
    //Modifica a mensagem
    mensagem.setMensagem(mensagemPath);
    // Retorno da mensagem
    response.status(200).json({ mensagem: mensagemPath });
};
// Exporta as funções
module.exports = {
    getMensagem,
    setMensagem,
    setMensagemQuery,
    setMensagemPath
};
