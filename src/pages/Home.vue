<template>
	<div>
		<shelf-display>
			<template v-for="(book, index) of getList">
				<shelf 
				:title="book.volumeInfo.title"
				:description="book.volumeInfo.description"
				:price="book.saleInfo.listPrice"
				:img="book.volumeInfo.imageLinks.thumbnail"
				></shelf>
			</template>
		</shelf-display>
	</div>
</template>

<script>
	import Shelf from "../shared/Shelf.vue"
	import Display from "../components/Display.vue"

	export default {
		components: {
			"shelf-display": Display,
			"shelf": Shelf
		},
		data() {
			return {
				searchTerm: ""
			};
		},
		computed: {
			getList: function() {
				const list = this.$store.state.books;
				return this.books = list;
			}
		},
		created () {
			this.$store.dispatch('GET_BOOKS');
		}
	};
</script>


<style scoped>

</style>