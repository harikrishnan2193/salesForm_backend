require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routers/router')
require('./db/connection')

const saleServer = express()

saleServer.use(cors())
saleServer.use(express.json())
saleServer.use(router)

const PORT = process.env.PORT || 4000;

saleServer.listen(PORT, () => {
    console.log(`Server running successfully on port number ${PORT}`);
})
saleServer.get('/', (req, res) => {
    res.send('Server running sucessfully and ready to accept client request');
})