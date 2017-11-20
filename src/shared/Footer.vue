<template>
	<footer class="footer">
		<div class="container">
			<p>Amazing Potato Fake Co LTDA Copyright Lorem Ipsum Joe - 2017.
				<small>Veja nosso código no <a href="https://github.com/Andreolle/livraria-stone" title="https://github.com/Andreolle/livraria-stone" target="_blank">git</a></small>
			</p>
		</div>
    </footer>
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
	$dark-green: #003920;
	$white: #ffffff;

	.footer {
		background: $dark-green;
		display: inline-block;
		width: 100%;
		color: $white;

		small {
			margin-left: 10px;
			a {
				color: $white;
			}
		}
	}
</style>