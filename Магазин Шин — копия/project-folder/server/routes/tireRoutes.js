const express = require('express');
const Tire = require('../models/Tire');

const router = express.Router();

// Получить все шины
router.get('/', async (req, res) => {
  try {
    const tires = await Tire.find();
    res.json(tires);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при получении шин' });
  }
});

// Добавить новую шину
router.post('/', async (req, res) => {
  const { name, brand, season, size, price } = req.body;

  const newTire = new Tire({
    name,
    brand,
    season,
    size,
    price
  });

  try {
    const savedTire = await newTire.save();
    res.status(201).json(savedTire);
  } catch (err) {
    res.status(400).json({ message: 'Ошибка при добавлении шины' });
  }
});

module.exports = router;
