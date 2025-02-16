const mongoose = require('mongoose')

const branchSchema = new mongoose.Schema({
    branchId: {
        type: String,
        require: true
    },
    branchName: {
        type: String,
        require: true
    }
})

const branches = mongoose.model('branches',branchSchema)
module.exports = branches