const express = require('express');
const Project = require('../model/Project');
const authMiddleware = require('../middlewares/authenticate');
const router = express.Router();

router.post('/create', authMiddleware, async (req, res) => {
  const { name, description, deadline } = req.body;
  try {
    const newProject = new Project({ name, description, deadline, user: req.user.id });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', authMiddleware, async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user.id });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
