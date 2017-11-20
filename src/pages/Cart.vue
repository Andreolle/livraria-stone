<template>
  <div>
    <section class="page-cart">
        <div class="container">
            <table class="cart-list">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th>Remover</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="item of getCart">
                        <cart-item
                        :title="item.volumeInfo.title"
                        :description="item.volumeInfo.description"
                        :price="item.saleInfo.listPrice"
                        :img="item.volumeInfo.imageLinks.thumbnail"
                        :id="item.id"
                        ></cart-item>
                    </template>
                </tbody>
            </table>
            <div class="totalize"><strong>TOTAL:</strong> <span class="total">R$ {{ amount }}</span></div>
        </div>
    </section>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Item from "../components/CartItem.vue"

	export default {
		components: {
            "cart-item": Item
		},
		data() {
			return {
                amount: '00.00'
			};
        },
        computed: {
            getCart: function() {
                const cart = this.$store.state.cart;
				return cart;
            },
            getTotal: function() {
                const cart = this.$store.state.cart;
                if(cart) {
                   let getPrices = [];
                    cart.map((item, index) => {
                        getPrices.push(item.saleInfo.listPrice.amount);
                    })

                    var total = getPrices.reduce((a, b) => a + b, 0);
                    this.amount = total.toFixed(2);
                }
            },
            watch: function() {
                this.$store.watch(
                    (state)=>{
                        return this.$store.state.cart
                    },
                    (oldValue, newValue)=>{
                        this.getTotal
                    }
                )
            }
        },
        mounted: function() {
            this.getTotal
            this.watch
        }
	};
</script>


<style lang="sass?outputStyle=expanded" scoped>
    .page-cart {
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

    .totalize {
        width: 100%;
        padding: 10px 0;
        text-align: right;
        .total {
            font-size: 24px;
            margin-left: 10px;
        }
    }

    .container {
        max-width: 900px;
    }
</style>