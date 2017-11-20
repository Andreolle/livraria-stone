import Vue from "vue"
import { error } from "util";

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
            content.commit('GET_BOOKS', books);
        }).catch(error => {
            console.log("Resultado não encontrado");
        })
    }
}