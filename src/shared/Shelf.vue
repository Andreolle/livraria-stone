<template>
	<div class="shelf">
		<div class="shelf__img">
			<img :src="img"/>
		</div>
		
		<div class="shelf__content">
			<h2 class="shelf__title">{{ title }}</h2>
			<p class="shelf__description">{{ description }}</p>
			<p class="shelf__price">{{ price }}</p>
		</div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	props: ['title', 'description', 'price', 'img']
}
</script>

<style lang="sass?outputStyle=expanded">
	.shelf {
		border: 1px solid red;
		display: inline-block;
		width: 30%;
		height: 275px;
		margin: 0 1% 1% 0;
		vertical-align: top;
		box-sizing: border-box;
		&__img {
			display: inline-block;
		}

		&__content {
			display: inline-block;
			vertical-align: top;
			width: 60%;
			margin-left: 10px;
			text-align: left;
		}

		&__title {
			font-size: 16px;
			display: inline-block;
			margin: 10px 0 5px 0;
		}
		&__description {
			margin: 5px 0;
			height: 50px;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
</style>