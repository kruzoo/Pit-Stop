const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const tireRoutes = require('./routes/tireRoutes');

const app = express();

// Подключение к MongoDB (замени на свой MongoDB URI)
mongoose.connect('mongodb+srv://username:password@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Подключено к базе данных');
}).catch((err) => {
  console.log('Ошибка подключения к базе данных:', err);
});

// Middleware для парсинга JSON
app.use(bodyParser.json());

// Подключаем роуты для шин
app.use('/api/tires', tireRoutes);

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
