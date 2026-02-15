import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
  res.json({ message: 'User login' });
});

router.post('/register', (req, res) => {
  res.json({ message: 'User registration' });
});

export default router;