import Vue from "vue"

export default {
    GET_BOOKS(content,search){
        let term = search == undefined ? 'nerd+games+rpg' : search;
        const list = Vue.http.get(`https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=28&orderBy=newest`);
        const books = [];
        list.then(res => res.json())
        .then(res => {
            res.items.map(function(e) {
                books.push(e);
            });
        }).then(function() {
            content.commit('GET_BOOKS', books);
        })
    }
}