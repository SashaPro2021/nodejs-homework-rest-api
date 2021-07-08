const express = require('express')
const router = express.Router()

const { contacts: ctrl } = require('../../controllers')

router.get('/', ctrl.getAllContacts)

router.get('/:contactId', ctrl.getByIdContact)

router.post('/', ctrl.addContact)

router.delete('/:contactId', ctrl.delContact)

router.put('/:contactId', express.json(), ctrl.updateContact)

module.exports = router
