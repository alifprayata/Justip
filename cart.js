document.addEventListener('DOMContentLoaded', function() {
  const cartItemsContainer = document.getElementById('cart-items');
  const emptyCartContainer = document.getElementById('empty-cart');

  
  const products = JSON.parse(localStorage.getItem('cart')) || [];

  if (products.length > 0) {
    emptyCartContainer.style.display = 'none';

    products.forEach(function(product) {
      const card = createProductCard(product);
      cartItemsContainer.appendChild(card);
    });
  } else {
    emptyCartContainer.style.display = 'flex';
  }
});

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'card';

  const image = document.createElement('img');
  image.src = product.image;
  image.alt = 'Product Image';
  card.appendChild(image);

  const name = document.createElement('h2');
  name.textContent = product.name;
  card.appendChild(name);

  const category = document.createElement('p');
  category.textContent = `Kategori: ${product.category}`;
  card.appendChild(category);

  const description = document.createElement('p');
  description.textContent = `Deskripsi: ${product.description}`;
  card.appendChild(description);

  const rating = document.createElement('div');
  rating.className = 'rating';
  rating.innerHTML = '<img src="star.png" alt="Rating"><img src="star.png" alt="Rating"><img src="star.png" alt="Rating"><img src="star.png" alt="Rating"><img src="star.png" alt="Rating">';
  card.appendChild(rating);

  const price = document.createElement('p');
  price.className = 'price';
  price.textContent = product.price;
  card.appendChild(price);

  return card;
}

function clearCart() {
  
  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';


  const emptyCartElement = document.getElementById('empty-cart');
  emptyCartElement.style.display = 'block';
}

const clearCartButton = document.getElementById('btn-clear-cart');
clearCartButton.addEventListener('click', clearCart);
