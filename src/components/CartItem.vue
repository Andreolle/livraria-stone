<template>
	<div class="cart-item">
        <div class="product">
            <div class="product__img">
                <img src="" alt="foto">
            </div>
            <div class="product__description">
                <h2 class="product-name">Titulo</h2>
                <p class="product-description">Descrição curta</p>
            </div>
        </div>
        <div class="quantity">
            <div class="quantity__minus">-</div>
            <input type="text" class="quantity__selected">
            <div class="quantity__plus">+</div>
        </div>
        <div class="price">
            <span class="price__amount">R$ 99.99</span>
        </div>
        <div class="remove-item">
            <a href="#" class="remove-item__btn">
                <img src="../assets/img/remove.svg">
            </a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="sass?outputStyle=expanded">
    .cart-item {
        display: block;
        border-bottom: 1px solid #003920;
        margin-bottom: 25px;
        .product, .quantity,
        .price, .remove-item {
            position: relative;
            display: inline-block;
            vertical-align: top;
            box-sizing: border-box;
        }

        .product {
            width: 60%;
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
                }
            }
        }

        .quantity {
            width: 10%;
            text-align: center;
            &__minus,
            &__plus {
                display: inline-block;
                width: 10%;
            }
            &__selected {
                display: inline-block;
                width: 30px;
            }
            
        }

        .price {
            width: 20%;
            text-align: center;
        }

        .remove-item {
            width: 5%;
            text-align: center;
            &__btn {
                width: 15px;
                display: inline-block;
                img {
                    width: 100%;    
                }
            }
        }
    }

</style>