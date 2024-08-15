
const products = [{id : 1, name : 'Product 1', price : 10},
                     {id : 2, name : 'Product 2', price : 20},
                     {id : 3, name : 'Product 3', price : 30}];

const productsContainer = document.getElementById('products');
const cartContainer = document.getElementById('cart-products');
const checkoutButton = document.getElementById('checkout');

function renderProducts() {
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `<span>${product.name} - $${product.price}</span>
        <button onclick="addToCart(${product.id})">Add to Cart</button`;
        productsContainer.appendChild(productElement);
    });
}

const cart = [];
function addToCart(productId) {
    const product = products.find(prod => prod.id === productId);

    if (product) {
        cart.push(product);
        renderCart();
    }
}

function renderCart() {
    cartContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItemElement = document.createElement('li');
        cartItemElement.classList.add('cart-item');
        cartItemElement.textContent = `${item.name} - $${item.price}`;
        cartContainer.appendChild(cartItemElement);
    });
    checkoutButton.disabled = cart.length === 0;
}

checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) return;
    alert('Checkout complete!');

    cart.length = 0;
    renderCart();
});

renderProducts()