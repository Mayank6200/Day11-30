const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all tasks
router.get('/', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Add a task
router.post('/', (req, res) => {
  const { description } = req.body;
  if (!description || !description.trim()) return res.status(400).send('Description required');

  db.query('INSERT INTO tasks (description, completed) VALUES (?, ?)', [description.trim(), false], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(201);
  });
});

// Toggle complete
router.put('/:id', (req, res) => {
  db.query('UPDATE tasks SET completed = NOT completed WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

// Delete task
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM tasks WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

module.exports = router;
