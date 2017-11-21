<template>
	<div>
		<shelf-display>
			<template v-for="book of getList" v-if="search.length == 0">
				<shelf 
				:title="book.volumeInfo.title"
				:description="book.volumeInfo.description"
				:price="book.saleInfo.listPrice"
				:img="book.volumeInfo.imageLinks.thumbnail"
				:id="book.id"
				></shelf>
			</template>

			<template v-for="book of search" v-if="search.length != 0">
				<shelf 
				:title="book.volumeInfo.title"
				:description="book.volumeInfo.description"
				:price="book.saleInfo.listPrice"
				:img="book.volumeInfo.imageLinks.thumbnail"
				:id="book.id"
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
				search: []
			}
		},
		computed: {
			getList: function() {
				const list = this.$store.state.books;
				return this.books = list;
			},
			watch: function() {
				this.$store.watch(
					(state)=>{
						return this.$store.state.search
					},
					(state)=>{
						this.search = state;
					}
				)
			}
		},
		created() {
			this.$store.dispatch('INIT_BOOKS');
			this.getList
			this.watch
		}
	};
</script>


<style scoped>

</style>