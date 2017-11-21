<template>
	<div class="shelf">
		<div class="shelf__img">
			<img :src="img">
		</div>
		
		<div class="shelf__content">
			<h2 class="shelf__title">{{ title | truncate(30) }}</h2>
			<p class="shelf__description">{{ description | truncate(40) }}</p>
			<p class="shelf__price">{{ price | currentConverter }}</p>
		</div>
		<a :href="id" @click="addToCart" class="shelf__buy" v-if="price">Comprar</a>
    </div>
</template>

<script>
import filters from '../module/filters'
export default {
	props: ['title', 'description', 'price', 'img', 'id'],
	mixins: [filters],
	methods: {
		addToCart: function(event) {
			event.preventDefault();
			let cart = this.$store.state.cart;
			let allItens = [];
			const thisId = event.currentTarget.getAttribute('href');
			let item = this.$store.getters.getItem(thisId);

			console.log(item)
			
			// Atualiza o store cart
			this.$store.dispatch('ADD_CART', item);

			// Update Section Storage			
			cart.map((item) => {
				allItens.push(item);
			})
			window.localStorage.setItem('cart', JSON.stringify(allItens));
		}
	}
}
</script>

<style lang="sass?outputStyle=expanded">
	/* Colours */
	$text-color: #003920;
	$white: #ffffff;

	.shelf {
		position: relative;
		border: 1px solid lighten($text-color, 75%);
		display: inline-block;
		width: 24%;
		height: 215px;
		margin: 0 1% 1% 0;
		vertical-align: top;
		box-sizing: border-box;
		padding: 10px;
		&__img {
			display: inline-block;
			width: 100px;
			float: left;
			img {
				width: 100%;
			}
		}

		&__content {
			display: inline-block;
			vertical-align: top;
			width: 60%;
			min-width: 170px;
			margin-left: 10px;
			text-align: left;
    		box-sizing: border-box;
			color: $text-color;
		}

		&__title {
			font-size: 16px;
			display: inline-block;
			margin: 10px 0 5px 0;
		}
		&__description {
			margin: 5px 0;
			font-size: 14px;
		}
		&__price {
			font-weight: 600;
			color: #0db14b;
		}
		&__buy {
			position: absolute;
			left: 0;
			text-align: center;
			bottom: 0;
			background: #95c93f;
			color: $white;
			text-decoration: none;
			text-transform: uppercase;
			padding: 8px 20px;
			display: inline-block;
			width: 100%;
			box-sizing: border-box;
			clear: both;
			&:hover {
				background: #103a21;
			}
		}
	}

	@media screen and (min-width: 1281px) {
		.shelf {
			&:nth-child(4n) {
				margin-right: 0;
			}
		}
	}

	@media screen and (min-width: 996px) and (max-width: 1280px) {
		.shelf {
			width: 32%;
			&:nth-child(3n) {
				margin-right: 0;
			}
		}
	}

	@media screen and (min-width: 660px) and (max-width: 995px) {
		.shelf {
			width: 48%;
			&:nth-child(2n) {
				margin-right: 0;
			}
		}
	}

	@media screen and (max-width: 659px) {
		.shelf {
			width: 100%;
			height: 195px;
			margin: 0 0 15px 0;
			&__img {
				width: 85px;
			}
		}
	}
</style>