const express = require('express')
const routes = express.Router()

const filteredStreamController = require('./Controller/FilteredStreamController')

routes.get('/stream/rules', async (req, res, next) => {
  try {
    const data = await filteredStreamController.index()
    res.json(data)
  } catch (e) {
    next(e) 
  }
})

routes.post('/stream/rules', async (req, res, next) => {
  try {
    const data = await filteredStreamController.store()
    res.json(data)
  } catch (e) {
    next(e) 
  }
})

routes.delete('/stream/rules', async (req, res, next) => {
  try {
    const data = await filteredStreamController.delete()
    res.json(data)
  } catch (e) {
    next(e) 
  }
})

module.exports = routes;