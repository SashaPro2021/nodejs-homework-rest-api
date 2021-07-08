const express = require('express')
const router = express.Router()

const { contacts: ctrl } = require('../../controllers')

router.get('/', ctrl.getAllContacts)

router.get('/:id', ctrl.getByIdContact)

router.post('/', express.json(), ctrl.addContact)

router.delete('/:id', ctrl.delContact)

router.put('/:id', express.json(), ctrl.updateContact)

router.patch('/:id', express.json(), ctrl.updateFavoriteContact)

module.exports = router
