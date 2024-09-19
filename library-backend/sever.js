const express = require('express');
const mongoose = require('mongoose');
const = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://murilosxv:<db_password>@library.neggd.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log ('MongoDB conectado'))
.catch(err => console.error('Erro ao conectar ao MOngoDB:', err));

const booksRoutes = require('./routes/books');
app.use('/api/books',booksRoutes);


app.listen(3000, () => {
    console.log ('Servidor rodando na porta 3000');
});