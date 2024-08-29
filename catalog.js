document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const card = this.parentNode;
      const product = {
        image: card.querySelector('img').getAttribute('src'),
        name: card.querySelector('h2').textContent,
        category: card.querySelector('p:nth-child(3)').textContent.split(':')[1].trim(),
        description: card.querySelector('p:nth-child(4)').textContent.split(':')[1].trim(),
        rating: 5,
        price: card.querySelector('.price').textContent
      };

      
      let products = JSON.parse(localStorage.getItem('cart')) || [];

      
      products.push(product);

      
      localStorage.setItem('cart', JSON.stringify(products));

      alert('Produk telah ditambahkan ke keranjang!');
    });
  });
});
