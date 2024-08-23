const products = [{id : 1, name : 'Product 1', price : 10},
                     {id : 2, name : 'Product 2', price : 20},
                     {id : 3, name : 'Product 3', price : 30}
];

let totalPrice = 0;
                     
const productsContainer = document.getElementById('products');
const cartContainer = document.getElementById('cart-products');

const checkoutButton = document.getElementById('checkout');
checkoutButton.disabled = true;
checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) return;
    alert('Checkout complete for a total price of $' + totalPrice + '!');

    totalPrice = 0;
    cart.length = 0;

    renderCart();
});

const clearCart = document.getElementById('clear-cart');
clearCart.disabled = true;
clearCart.addEventListener('click', () => clearTheCart());

function renderProducts() {
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `<span>${product.name} - $${product.price}</span>
        <button onclick="addToCart(${product.id})" class="add-button">Add to Cart</button`;

        productsContainer.appendChild(productElement);
    });
}

const cart = [];

function addToCart(productId) {
    const product = products.find(prod => prod.id === productId);

    if (product) {
        totalPrice += product.price;
        cart.push(product);

        renderCart();
    }
}

function renderCart() {
    cartContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `<span>${item.name} - $${item.price} </span>
        <button onclick="removeItemFromCart(${index})" class="remove-button"><b>–</b></button>`;

        cartContainer.appendChild(cartItemElement);
    });

    if (cart.length > 0) {
        const totalPriceDisp = document.createElement('div');
        totalPriceDisp.innerHTML = `<b>Total price: $${totalPrice}</b>`;
        
        cartContainer.appendChild(totalPriceDisp);
    }

    checkoutButton.disabled = cart.length === 0;
    clearCart.disabled = cart.length === 0;
}

function removeItemFromCart(index) {
    if (cart[index]) {
        totalPrice -= cart[index].price;
        cart.splice(index, 1);

        renderCart();
    }
}

function clearTheCart() {
    totalPrice = 0;
    cart.splice(0, cart.length);
    
    renderCart();
}

renderProducts();