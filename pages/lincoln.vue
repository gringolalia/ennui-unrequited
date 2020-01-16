<template lang="pug">
div
	.uk-flex(style="max-height: 100vh")
		.uk-container-small.uk-align-center
			.uk-card.uk-card-body.uk-card-small.uk-text-center
					img(src="../assets/images/hammer-sickle.svg" width="175px")
					h1 Debating Douglas
					h2.uk-margin-remove-top.uk-margin-medium-bottom Eloquent In Gettysburg
					button.uk-button.uk-button-primary.uk-margin-small-right Imprints
					a.uk-button.uk-button-secondary.uk-margin-small-right(href="sobre") Offprints
					a.uk-button.uk-button-primary(href="about") Footprints

</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
	components: {
		Logo
	}
}
</script>

<style>

.container {
	min-height: calc(100vh - 120px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.title {
	font-family: 'News Cycle', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	display: block;
	font-weight: 300;
	font-size: 50px;
}

.subtitle {
	font-family: "News Cycle", sans-serif;
	font-weight: 300;
	font-size: 28px;
	padding-bottom: 15px;
}

</style>
