export default {
    INIT_BOOKS(state, data) {
        state.books = data;
    },
    GET_BOOKS(state, data) {
        state.search = data;
    },
    ADD_CART(state, data) {
        let cart = state.cart;
        cart.push(data[0]);
    },
    REMOVE_CART(state, data) {
        let cart = state.cart;
        
        cart.map((item, index) => {
            if(item == data[0]) {
                cart.splice(index, 1);
                window.localStorage.setItem('cart', JSON.stringify(cart));
            }
        });
    }
}