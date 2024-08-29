const express = require('express')
const router = express.Router()
const personController = require('../controllers/persons')
const dataBase = "persons"
const validator = require('../validators/persons')




//List all persons-1
router.get(`/${dataBase}`, personController.getItems)


//Get a person by id
router.get(`/${dataBase}/:id`,validator.validatePersonId, personController.getItem)


//Create a new person
router.post(`/${dataBase}`,validator.validateNewPerson,personController.createItem)



//Update an existing person
router.put(`/${dataBase}/:id`,validator.validatePersonId,validator.validateUpdatePerson,personController.updateItem)


//delete a person
router.delete(`/${dataBase}/:id`,validator.validatePersonId , personController.deleteItem)


//List all the jobs of a person
router.get(`/${dataBase}/:id/works`,validator.validatePersonId,personController.getWorks)


//add new work to person
router.post(`/${dataBase}/:id/works`,validator.validatePersonId ,validator.validateNewWork ,personController.addWork)


//Update a specific work
router.patch(`/${dataBase}/:id/works/:workId`,validator.validatePersonId,validator.validateWorkId,validator.validateUpdateWork,personController.updateWork)


//delete a specific work
router.delete(`/${dataBase}/:id/works/:workId`,validator.validatePersonId,validator.validateWorkId, personController.deleteWork)





module.exports = router