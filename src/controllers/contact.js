const Contact = require('../model/contactModel');

exports.createContact = async (req, res) => {
  const { firstName, lastName, phone } = req.body;

  if (!firstName || !lastName || !phone) return res.status(400).json({ message: 'All fields are required' });

  try {
    const contact = new Contact({ user: req.user.id, firstName, lastName, phone });
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.listContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.updateContact = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, phone } = req.body;

  try {
    const contact = await Contact.findById(id);
    if (!contact || contact.user.toString() !== req.user.id)
      return res.status(404).json({ message: 'Contact not found' });

    contact.firstName = firstName || contact.firstName;
    contact.lastName = lastName || contact.lastName;
    contact.phone = phone || contact.phone;

    await contact.save();
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findById(id);
    if (!contact || contact.user.toString() !== req.user.id)
      return res.status(404).json({ message: 'Contact not found' });

    await contact.remove();
    res.json({ message: 'Contact deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
