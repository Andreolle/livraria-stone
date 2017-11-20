export default {
    GET_BOOKS(state, data) {
        state.books = data;
    },
    ADD_CART(state, data) {
        let cart = state.cart;
        cart.push(data[0]);
        
        // window.localStorage.setItem('cart', JSON.stringify(cart));
    },
    REMOVE_CART(state, data) {

    }
}