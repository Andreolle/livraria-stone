<template>
	<div id="app">
		<page-header></page-header>
		<div class="content">
			<router-view/>
		</div>
		<page-footer></page-footer>
	</div>
</template>

<script>
	import Header from "./shared/Header.vue"
	import Footer from "./shared/Footer.vue"
	import Vue from "vue"

	export default {
		components: {
			"page-header": Header,
			"page-footer": Footer
		}		
	}
</script>

<style lang="sass?outputStyle=expanded">
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600');
	
	html,body {
		padding: 0;
		margin: 0;
		font-family: 'Montserrat', sans-serif;
	}
	.container {
		max-width: 1280px;
		margin: 0 auto;
	}

	.content {
		min-height: calc(100vh - 140px);
	}

	@media screen and (max-width: 1280px) {
		.container {
			padding: 0 15px;
		}
	}
</style>