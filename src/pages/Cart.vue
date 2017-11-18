<template>
  <div>
    <section class="page-cart">
        <div class="container">
            <table class="cart-list">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                        <th>Remover</th>
                    </tr>
                </thead>
                <tbody>
                    <cart-item></cart-item>
                </tbody>
            </table>
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


<style lang="sass?outputStyle=expanded" scoped>
    .page-cart {
        min-height: calc(100vh - 138px);
        padding: 60px 0;
        box-sizing: border-box;
    }
    .cart-list {
        width: 100%;
        border-spacing: 0;
        border-collapse: collapse;
        thead {
            th {
                background: #003920;
                color: #ffffff;
                padding: 5px 0;
                font-size: 14px;
                font-weight: 400;
            }
        }
    }

    .container {
        max-width: 900px;
    }
</style>