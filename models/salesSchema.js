const mongoose = require('mongoose');
const { isAlpha, isNumeric } = require('validator');

const salesSchema = new mongoose.Schema({
    salesperson: {
        type: String,
        required: [true, 'Salesperson Name is required'],
        validate: [isAlpha, 'Only letters are allowed']
    },
    branch: {
        type: String,
        required: [true, 'Branch selection is required']
    },
    amount: {
        type: String,
        required: [true, 'Amount is required'],
        min: [1, 'Amount must be at least 1'],
        validate: [isNumeric, 'Amount must be a number']
    },
    description: {
        type: String
    }
});

const Sales = mongoose.model('Sales', salesSchema);
module.exports = Sales;
