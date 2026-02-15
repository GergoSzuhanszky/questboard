import express from 'express';

const router = express.Router();

router.get(':id', (req, res) => {
  res.json({ message: `Get user with ID ${req.params.id}` });
});

router.put(':id', (req, res) => {
  res.json({ message: `Update user with ID ${req.params.id}` });
});

export default router;