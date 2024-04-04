const PROXY_CONFIG = [
  {
    context: ['/filme/omdb'], // Especifique o contexto da API que deseja redirecionar
    target: 'http://localhost:8080', // Endereço do servidor de destino
    secure: false,
    logLevel: 'debug',
    changeOrigin: true, // Adicione essa opção para mudar a origem da solicitação
    onProxyRes: function(proxyRes, req, res) { // Adicione essa função para configurar os cabeçalhos CORS
      res.setHeader('Access-Control-Allow-Origin', '*'); // Permite solicitações de qualquer origem
    }
  }
];

module.exports = PROXY_CONFIG;
