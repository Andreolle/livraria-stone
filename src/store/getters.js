export default {
    getItem(state) {
        return book => state.books.filter(books =>{
            return books.id === book
        });
    }
}