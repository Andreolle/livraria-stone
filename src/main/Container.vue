<template>
  <div>
    <page-header></page-header>
	
	<section class="container-shelf">
		<div class="container">
			<div class="shelf">
				<h2>Nome do livro</h2>
				<p>Descrição</p>
				<p>Preço</p>
			</div>
			<div class="shelf">
				<h2>Nome do livro</h2>
				<p>Descrição</p>
				<p>Preço</p>
			</div>
			<div class="shelf">
				<h2>Nome do livro</h2>
				<p>Descrição</p>
				<p>Preço</p>
			</div>
			<div class="shelf">
				<h2>Nome do livro</h2>
				<p>Descrição</p>
				<p>Preço</p>
			</div>
			<div class="shelf">
				<h2>Nome do livro</h2>
				<p>Descrição</p>
				<p>Preço</p>
			</div>
			<div class="shelf">
				<h2>Nome do livro</h2>
				<p>Descrição</p>
				<p>Preço</p>
			</div>
			<div class="shelf">
				<h2>Nome do livro</h2>
				<p>Descrição</p>
				<p>Preço</p>
			</div>
			<div class="shelf">
				<h2>Nome do livro</h2>
				<p>Descrição</p>
				<p>Preço</p>
			</div>
		</div>
		
	</section>



    <page-footer></page-footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
	components: {
		'page-header': Header,
		'page-footer': Footer
	},
	data () {
		return {
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>