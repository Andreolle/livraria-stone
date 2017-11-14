<template>
  <div>
    <page-header></page-header>

    <page-footer></page-footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

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
