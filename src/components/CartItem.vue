<template>
	<tr class="cart-item">
        <td class="product">
            <div class="product__img">
                <img :src="img">
            </div>
            <div class="product__description">
                <h2 class="product-name">{{ title | truncate(30) }}</h2>
                <p class="product-description">{{ description | truncate(200) }}</p>
            </div>
        </td>
        <td class="price">
            <span class="price__amount">{{ price  | currentConverter }}</span>
        </td>
        <td class="remove-item">
            <a href="#" class="remove-item__btn">
                <img src="../assets/img/remove.svg">
            </a>
        </td>
    </tr>
</template>

<script>
    import filters from '../module/filters'
    export default {
        props: ['title', 'description', 'price', 'img', 'id'],
        mixins: [filters]
    }
</script>

<style lang="sass?outputStyle=expanded">
    .cart-item {
        position: relative;
        td {
            border-bottom:1pt solid black;
            padding: 20px 0 3px 0;
        }
        .product {
            &__img {
                display: inline-block;
                width: 100px;
                vertical-align: top;
                img {
                    width: 100%;
                }
            }
            &__description {
                max-width: 70%;
                display: inline-block;
                vertical-align: top;
                margin-left: 15px;
                .product-name {
                    margin: 0;
                    font-size: 16px;
                }
                .product-description {
                    font-size: 14px;
                }
            }
        }

        .quantity {
            text-align: center;
            width: 10%;
            &__minus,
            &__plus {
                display: inline-block;
                font-size: 20px;
                vertical-align: middle;
                margin: 0 4px;
                cursor: pointer;
            }
            &__selected {
                display: inline-block;
                width: 20px;
                padding: 3px 5px;
                text-align: center;
            }
            
        }

        .price {
            text-align: center;
            font-size: 14px;
            width: 15%;
        }

        .remove-item {
            text-align: center;
            width: 10%;
            &__btn {
                width: 12px;
                display: inline-block;
                img {
                    width: 100%;    
                }
            }
        }
    }
</style>