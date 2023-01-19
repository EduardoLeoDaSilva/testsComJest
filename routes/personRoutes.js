import express from 'express'
import PersonController from '../controllers/person.controller.js'

const personRoutes = express.Router()

personRoutes.get('/', PersonController.getAllPersons)
  .get('/:id', PersonController.getPerson)
  .post('/', PersonController.savePerson)
  .put('/', PersonController.updatePerson)
  .delete('/:id', PersonController.deletePerson)

export default personRoutes
