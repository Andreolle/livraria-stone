<template>
	<article class="page-not-found">
        <div class="container">
            <div class="img-container">
                <img src="../assets/img/error-404.svg">
            </div>
            <router-link to="/" class="btn-back">Voltar </router-link>
        </div>
    </article>
</template>

<style lang="sass?outputStyle=expanded" scoped>
    .page-not-found {
        padding: 60px 0;
        text-align: center;
        h2 {
            
        }
        .img-container {
            max-width: 440px;
            margin: 0 auto;
            margin-top: calc(50vh - 400px);
            img {
                width: 100%;
            }
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
</style>