<template>
  <div>
    <section class="page-cart">
        <div class="container">
            <template v-if="getCart.length == '0'">
                <div class="empty-cart">
                    <h2 class="empty-cart__title">Seu carrinho está vazio.</h2>
                    <p>Para continuar comprando, navegue pelo site ou faça uma busca pelo seu produto.</p>
                    <router-link to="/" class="btn-back">Voltar </router-link>
                </div>
            </template>
            <template v-else>
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
            </template>
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

    .empty-cart {
        color: #003920;
        &__title {
            font-size: 26px;
            margin-bottom: 10px;
        }
        p {
            margin: 5px 0 25px 0;
        }
        .btn-back {
            display: inline-block;
            text-transform: uppercase;
            background: #95c93f;
            color: #ffffff;
            text-decoration: none;
            padding: 10px 15px;
            box-sizing: border-box;
            &:hover {
                background: darken(#95c93f, 12%);
            }
        }
    }

    .container {
        max-width: 900px;
    }
</style>