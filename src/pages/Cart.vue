<template>
  <div>
    <page-header></page-header>
	
    <section class="page-cart">
        <div class="container">
            <cart-item></cart-item>
        </div>
    </section>
    
    <page-footer></page-footer>
  </div>
</template>

<script>
	import Header from "../shared/Header.vue"
    import Footer from "../shared/Footer.vue"
    import Item from "../components/CartItem.vue"

	export default {
		components: {
			"page-header": Header,
            "page-footer": Footer,
            "cart-item": Item
		},
		data() {
			return {
			};
		}
	};
</script>


<style scoped>
    .header {
        margin-bottom: 60px;
    }
    .page-cart {
        
    }
    .footer {
        position: absolute;
        left: 0;
        bottom: 0;
    }
</style>