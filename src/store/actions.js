import Vue from "vue"
import { error } from "util";

export default {
    INIT_BOOKS(init) {
        const list = Vue.http.get(`https://www.googleapis.com/books/v1/volumes?q=games&orderBy=newest&maxResults=40&orderBy=newest`);
        const books = [];
        list.then(res => res.json())
        .then(res => {
            res.items.map(function(e) {
                if(e.saleInfo.saleability == "FOR_SALE") {
                    books.push(e);
                }
            });
            window.localStorage.setItem('books', JSON.stringify(books));
            init.commit('INIT_BOOKS', books);
        }).catch(error => {
            console.log("Resultado não encontrado");
        });
    },
    GET_BOOKS(content,search) {
        let term = search;
        term = term.toLowerCase();
        const list = Vue.http.get(`https://www.googleapis.com/books/v1/volumes?q="${term}"&orderBy=newest&maxResults=28&orderBy=newest`);
        const books = [];
        list.then(res => res.json())
        .then(res => {
            res.items.map(function(e) {
                books.push(e);
            });
            content.commit('GET_BOOKS', books);
        }).catch(error => {
            console.log("Resultado não encontrado");
        })
    },
    ADD_CART(item, id) {
        item.commit('ADD_CART', id);
    },
    REMOVE_CART(item, id) {
        item.commit('REMOVE_CART', id);
    }
}