export default {
    getItem(state) {
        return book => state.books.filter(books =>{
            return books.id === book
        });
    },
    getCartItem(state) {
        return item => state.cart.filter(cart => {
            return cart.id === item
        })
    }
}