<template>
	<div class="container">
		<section class="container-shelf">
			<slot></slot>
		</section>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="sass?outputStyle=expanded" scoped>
	.container-shelf {
		min-height: calc(100vh - 138px);
		padding-top: 25px;
		padding-bottom: 25px;
		text-align: center;
	}
</style>