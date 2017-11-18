<template>
  <div>
    <section class="page-cart">
        <div class="container">
            <cart-item></cart-item>
        </div>
    </section>
  </div>
</template>

<script>
    import Item from "../components/CartItem.vue"

	export default {
		components: {
            "cart-item": Item
		},
		data() {
			return {
			};
		}
	};
</script>


<style scoped>
    .page-cart {
        min-height: calc(100vh - 138px);
        padding: 60px 0;
        box-sizing: border-box;
    }

    .container {
        max-width: 900px;
    }
</style>