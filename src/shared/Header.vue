<template>
	<header class="header">
		<div class="container">
	    	<h1 class="header__logo">
				<router-link to="/">
					<img src="../assets/img/logo.png" alt="logo">
				</router-link>
	    	</h1>
			
			<div class="header__search" v-if="$route.path != '/cart'">
				<input type="text" class="search-field" @input="searchText = $event.target.value" placeholder="O que você procura?">
				<div class="search" @click="search">
					<img src="../assets/img/magnifying-glass.svg">
				</div>
			</div>

	    	<div class="minicart">
				<router-link to="/cart">
					<div class="minicart__icon">
						<img src="../assets/img/shopping-cart.svg" alt="">
					</div>
				</router-link>
				<div class="minicart__quantity">{{cartQty}}</div>
			</div>
		</div>
    </header>
</template>

<script>
export default {
	data() {
		return {
			searchText: ""
		}
	},
	methods: {
		'search': function() {
			let term = this.searchText;
			if(term.length != 0) {
				this.$store.dispatch('GET_BOOKS', term);
				document.querySelectorAll('.search-field')[0].value = ""
			}
		}
	},
	computed: {
		cartQty: function() {
			let quantity = this.$store.state.cart;
			return quantity.length;
		}
	}
}

</script>

<style lang="sass?outputStyle=expanded" scoped>
	/* Colours */
	$header-green: #D6EACE;
	$green: #95c93f;
	$white: #ffffff;

	.header {
		position: relative;
		background: $header-green;
		padding: 15px 0 10px 0;
		border-bottom: 2px solid #003920;

		.container {
			position: relative;
		}

		&__logo {
			display: inline-block;
			max-width: 145px;
			vertical-align: middle;
			margin: 0;
			img {
				width: 100%;
			}
		}

		&__search {
			width: 50%;
			position: relative;
			display: inline-block;
			font-size: 14px;
			margin-left: 35px;
			margin-bottom: -10px;
			.search-field {
				padding: 8px 8px;
				width: 100%;
				box-sizing: border-box;
			}
			.search {
				position: absolute;
				top: 7px;
				right: 10px;
				width: 20px;
				cursor: pointer;
				img {
					width: 100%;
				}
			}
		}

		.minicart {
			position: absolute;
			right: 0;
			top: 10px;
			&__icon {
				display: inline-block;
				position: relative;
				width: 25px;
				height: 25px;
				padding: 8px 11px 7px 8px;
				background: $green;
				vertical-align: middle;
			}
			&__quantity {
				font-size: 25px;
				display: inline-block;
				color: $white;
				font-weight: 600;
				background: #24844b;
				min-width: 50px;
				text-align: center;
				box-sizing: border-box;
				padding: 5px;
				vertical-align: middle;
				margin-left: -5px;
			}
			img {
				width: 100%;
			}
		}
	}

	@media screen and (max-width: 1280px) {
		.header {
			.minicart {
				right: 35px;
			}
		}
	}

	@media screen and (max-width: 640px) {
		.header {
			&__search {
				display: block;
				width: 100%;
				margin: 10px 0px 0px 0px;
			}

			.minicart {
				right: 15px;
			}
		}
	}
</style>