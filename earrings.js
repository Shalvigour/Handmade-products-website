let cartItems = [];
let totalPrice = 0;

function addToCart(productId) {
    // In a real application, you would handle product data and pricing dynamically.
    const productName = `Product ${productId}`;
    const productPrice = productId === 1 ? 20 : 30;
    cartItems.push({ name: productName, price: productPrice });
    totalPrice += productPrice;

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total-price");

    cartList.innerHTML = '';
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} : $${item.price}`;
        cartList.appendChild(listItem);
    });

    totalDisplay.textContent = `Total: $${totalPrice}`;
}