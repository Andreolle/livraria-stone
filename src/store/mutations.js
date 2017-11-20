export default {
    'GET_BOOKS'(state, data) {
        state.books = data;
    },
    'ADD_CART'(state, data) {
        state.cart = data;
    }
}