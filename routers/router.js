const express = require('express')
const router = new express.Router()
const controller = require('../controllers/controller')

router.get('/sales/branchs', controller.getBranch)

router.post('/sales/detils', controller.postSales)

router.get('/sales/allsales', controller.getAllSales)

router.put('/sales/editsales/:id', controller.editSales)

router.delete('/sales/deletesales/:id', controller.deleteSales)

module.exports = router