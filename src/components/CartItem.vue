<template>
	<tr class="cart-item">
        <td class="product">
            <div class="product__img">
                <img src="" alt="foto">
            </div>
            <div class="product__description">
                <h2 class="product-name">Titulo</h2>
                <p class="product-description">Descrição curta</p>
            </div>
        </td>
        <td class="quantity">
            <div class="quantity__minus">-</div>
            <input type="text" class="quantity__selected">
            <div class="quantity__plus">+</div>
        </td>
        <td class="price">
            <span class="price__amount">R$ 99.99</span>
        </td>
        <td class="remove-item">
            <a href="#" class="remove-item__btn">
                <img src="../assets/img/remove.svg">
            </a>
        </td>
    </tr>
</template>

<script>
export default {

}
</script>

<style lang="sass?outputStyle=expanded">
    .cart-item {
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
                display: inline-block;
                vertical-align: top;
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
            &__minus,
            &__plus {
                display: inline-block;
            }
            &__selected {
                display: inline-block;
                width: 30px;
            }
            
        }

        .price {
            text-align: center;
            font-size: 14px;
        }

        .remove-item {
            text-align: center;
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