<template>
  <div>
    <page-header></page-header>
	
	<shelf-display>
		
		<template v-for="(book, index) of books">
			<!-- <div class="shelf">
				<h2>{{ book.volumeInfo.title }}</h2>
				<p>{{ book.volumeInfo.description }}</p>
				
				<p v-for="(price, prop, index) of book.saleInfo.listPrice" :key="price[0]" v-if="prop =='amount'" >
					{{ price }}
				</p>
			</div> -->


			<shelf 
			:title="book.volumeInfo.title"
			:description="book.volumeInfo.description"
			:price="book.saleInfo.listPrice"
			:img="book.volumeInfo.imageLinks.thumbnail"
			></shelf>

		</template>
	</shelf-display>

    <page-footer></page-footer>
  </div>
</template>

<script>
	import Header from "../shared/Header.vue"
	import Footer from "../shared/Footer.vue"
	import Shelf from "../shared/Shelf.vue"
	import Display from "../components/Display.vue"

	export default {
		components: {
			"page-header": Header,
			"page-footer": Footer,
			"shelf-display": Display,
			"shelf": Shelf
		},
		data() {
			return {
				books: []		
			};
		},
		methods: {
			getList: function() {
				let books = this.books;
				let list = this.$http.get('https://www.googleapis.com/books/v1/volumes?q=subject:science&maxResults=30&orderBy=newest');
				list.then(res => res.json())
				.then(res => {
					res.items.map(function(e) {
						books.push(e);
					});
				})
			}
		},
		created () {
			this.getList();
		}
	};
</script>


<style scoped>

</style>