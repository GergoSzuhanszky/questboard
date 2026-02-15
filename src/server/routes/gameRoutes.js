import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all games' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create a new game' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get game with ID ${req.params.id}` });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Update game with ID ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete game with ID ${req.params.id}` });
});

export default router;