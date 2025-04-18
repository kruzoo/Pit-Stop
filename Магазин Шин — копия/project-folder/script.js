// Массив шин (примерные данные)
const tires = [
  { 
    name: 'Continental PremiumContact 6', 
    brand: 'Continental', 
    season: 'лето', 
    size: '195/65R15', 
    price: 8500,
    image: 'https://via.placeholder.com/300x200?text=Continental'
  },
  { 
    name: 'Шины Michelin Alpin 6', 
    brand: 'Michelin', 
    season: 'зима', 
    size: '225/55R17', 
    price: 23930,
    image: 'image/bmw1.jpg'
  },
  { 
    name: 'Michelin CrossClimate 2', 
    brand: 'Michelin', 
    season: 'всесезонные', 
    size: '185/70R14', 
    price: 7800,
    image: 'https://via.placeholder.com/300x200?text=Michelin'
  },
  { 
    name: 'Continental PremiumContact 6', 
    brand: 'Continental', 
    season: 'лето', 
    size: '195/65R15', 
    price: 8500,
    image: 'https://via.placeholder.com/300x200?text=Continental'
  },
 








































































































































];

// Функция для отображения шин
function displayTires(filteredTires) {
  const container = document.getElementById('tires-container');
  container.innerHTML = '';

  filteredTires.forEach(tire => {
    const tireDiv = document.createElement('div');
    tireDiv.classList.add('tire');
    tireDiv.innerHTML = `
      <div class="tire-image" style="background-image: url('${tire.image || 'https://via.placeholder.com/300x200?text=PitStop'}'); height: 150px; background-size: cover; background-position: center;"></div>
      <div class="tire-content">
        <h3>${tire.name}</h3>
        <p><strong>Бренд:</strong> ${tire.brand}</p>
        <p><strong>Сезон:</strong> ${tire.season}</p>
        <p><strong>Размер:</strong> ${tire.size}</p>
        <p class="price">${tire.price.toLocaleString('ru-RU')} руб.</p>
      </div>
    `;
    container.appendChild(tireDiv);
  });
}

// Функция фильтрации шин
function filterTires() {
  const seasonFilter = document.getElementById('season').value;
  const sizeFilter = document.getElementById('size').value.toLowerCase();

  const filteredTires = tires.filter(tire => {
    const matchesSeason = seasonFilter ? tire.season === seasonFilter : true;
    const matchesSize = sizeFilter ? tire.size.toLowerCase().includes(sizeFilter) : true;
    return matchesSeason && matchesSize;
  });

  displayTires(filteredTires);
}

// Слушаем изменения в фильтрах
document.getElementById('season').addEventListener('change', filterTires);
document.getElementById('size').addEventListener('input', filterTires);

// Изначально отображаем все шины
displayTires(tires);


const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('nav');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active'); // Добавляем класс к бургеру
  nav.classList.toggle('active'); // И к навигации
});

// Закрытие меню при клике вне его
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !burgerMenu.contains(e.target)) {
    nav.classList.remove('active');
  }
});

// Закрытие при ресайзе
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    nav.classList.remove('active');
  }
});












































































const burgerMenus = document.querySelector('.burger-menu');


burgerMenu.addEventListener('click', (e) => {
  e.stopPropagation();
  burgerMenu.classList.toggle('active');
  nav.classList.toggle('active');
});

// Закрытие меню при клике вне его
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !burgerMenu.contains(e.target)) {
    burgerMenu.classList.remove('active');
    nav.classList.remove('active');
  }
});

// Закрытие при ресайзе
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    burgerMenu.classList.remove('active');
    nav.classList.remove('active');
  }
});
