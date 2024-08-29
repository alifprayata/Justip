document.addEventListener('DOMContentLoaded', function() {
    const orderHistory = [
      
      { storeName: "Toko A", productName: "Produk 1", orderDate: "2023-06-15 10:30:00" },
      { storeName: "Toko B", productName: "Produk 2", orderDate: "2023-06-16 14:45:00" },
      { storeName: "Toko C", productName: "Produk 3", orderDate: "2023-06-17 09:15:00" }
    ];
  
    const orderHistoryContainer = document.getElementById('order-history');
    const storeName = document.getElementById('store-name');
    const productName = document.getElementById('product-name');
    const orderDate = document.getElementById('order-date');
    const trackCourierBtn = document.getElementById('track-courier');
  
   
    if (orderHistory.length === 0) {
      orderHistoryContainer.textContent = 'Belum ada riwayat pemesanan.';
    } else {
      for (let i = 0; i < orderHistory.length; i++) {
        const order = orderHistory[i];
        const orderItem = document.createElement('div');
        orderItem.textContent = `${order.storeName} - ${order.productName}`;
        orderItem.addEventListener('click', function() {
          showOrderDetails(order);
        });
        orderHistoryContainer.appendChild(orderItem);
      }
    }
  
    function showOrderDetails(order) {
      storeName.textContent = order.storeName;
      productName.textContent = order.productName;
      orderDate.textContent = `Tanggal dan Jam Pemesanan: ${order.orderDate}`;
      trackCourierBtn.addEventListener('click', function() {
  
      });
    }
  });
  