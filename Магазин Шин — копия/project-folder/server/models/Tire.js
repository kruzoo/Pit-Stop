const mongoose = require('mongoose');

// Определяем схему для шин
const tireSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  season: { type: String, enum: ['лето', 'зима', 'всесезонные'], required: true },
  size: { type: String, required: true },
  price: { type: Number, required: true },
});

// Создаем модель для шин
const Tire = mongoose.model('Tire', tireSchema);

module.exports = Tire;
