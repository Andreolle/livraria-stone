const LSCart = window.localStorage.getItem('cart');
const parsedCart = JSON.parse(LSCart) || [];
const LSBooks = window.localStorage.getItem('books');
const parsedBooks = JSON.parse(LSBooks) || [];

export default {
    'search': [],
    'books': parsedBooks,
    'cart': parsedCart
}