<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		
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

	@media screen and (max-width: 1280px) {
		.container {
			padding: 0 15px;
		}
	}
</style>