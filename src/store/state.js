const LSCart = window.localStorage.getItem('cart');
const parsedCart = JSON.parse(LSCart) || [];

export default {
    'books': [],
    'cart': parsedCart
}