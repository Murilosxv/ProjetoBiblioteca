const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    tilte: {type: String, required: true},
    author: {type: String, required: true},
    year: {type: Number},
})

module.exports = mongoose.model ('Book', BookSchema);