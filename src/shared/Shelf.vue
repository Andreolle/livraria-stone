<template>
	<div class="shelf">
		<div class="shelf__img">
			<img :src="img"/>
		</div>
		
		<div class="shelf__content">
			<h2 class="shelf__title">{{ title | truncate(30) }}</h2>
			<p class="shelf__description">{{ description | truncate(40) }}</p>
			<p class="shelf__price">{{ price | currentConverter }}</p>
		</div>
    </div>
</template>

<script>
export default {
	props: ['title', 'description', 'price', 'img'],
	filters: {
		truncate(value, qty) {
			if (value.length > qty) {
				return value.substring(0, qty)+"...";	
			} else {
				return value;
			}
		},

		currentConverter(value) {
			if(value) {
				let amount = 'R$ '+value.amount.toFixed(2).toString().replace('.',',');
				return amount;
			} else {
				return "Produto Indisponível";
			}
			
		}
	}
	
}
</script>

<style lang="sass?outputStyle=expanded">
	/* Colours */
	$text-color: #003920;
	.shelf {
		border: 1px solid lighten($text-color, 75%);
		display: inline-block;
		width: 25%;
		margin: 0 1% 1% 0;
		vertical-align: top;
		box-sizing: border-box;
		padding: 10px;
		&__img {
			display: inline-block;
			width: 30%;
			float: left;
			img {
				width: 100%;
			}
		}

		&__content {
			display: inline-block;
			vertical-align: top;
			width: 60%;
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
	}
</style>