<template>
	<header class="header">
		<div class="container">
	    	<h1 class="header__logo">
	    		<img src="../assets/img/logo.png" alt="logo">
	    	</h1>

	    	<div class="minicart">
				<div class="minicart__icon">
					<img src="../assets/img/shopping-cart.svg" alt="">
				</div>
				<div class="minicart__quantity">00</div>
			</div>
		</div>
    </header>
</template>

<script>
export default {
	data() {
		return {
			
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
		background: $header-green;
		padding: 15px 0 10px 0;

		&__logo {
			display: inline-block;
			max-width: 145px;
			vertical-align: middle;
			margin: 0;
			img {
				width: 100%;
			}
		}

		.minicart {
			float: right;
			margin-top: 15px;
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
</style>