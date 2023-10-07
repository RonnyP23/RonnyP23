const express = require('express');
const path = require('path');

const app = express(); // Crie a instância do aplicativo Express antes de configurá-lo

// Serve os arquivos estáticos do diretório "dist" do projeto Angular
app.use(express.static(path.join(__dirname, 'dist', 'brfake')));

// Configuração para tratar todas as rotas Angular
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'brfake', 'index.html'));
});

// Inicializa o servidor na porta fornecida pelo Heroku ou na 8080 se estiver local
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Aplicação Angular está rodando na porta ${port}`);
});