const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');
const { createContact, listContacts, updateContact, deleteContact } = require('../controllers/contact');

router.post('/', authenticate, createContact);
router.get('/', authenticate, listContacts);
router.put('/:id', authenticate, updateContact);
router.delete('/:id', authenticate, deleteContact);

module.exports = router;
