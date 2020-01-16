<template lang="pug">
div
	.uk-flex(style="max-height: 100vh")
		.uk-container-small.uk-align-center
			.uk-card.uk-card-body.uk-card-small.uk-text-center
				img(src="../assets/images/hammer-sickle.svg" width="175px")
				h1 Yonder Is Khartoum
				h2.uk-margin-remove-top.uk-margin-medium-bottom Youngsters In Kindergarten
				a.uk-button.uk-button-primary.uk-margin-small-right(href="#down") Imprints
				a.uk-button.uk-button-default.uk-margin-small-right(href="sobre") Offprints
				a.uk-button.uk-button-primary(href="about") Footprints

	.uk-section(style="height: calc(100vh - 75px)")

		.uk-grid-collapse#down(uk-grid)
			.uk-card.uk-card-light(class="uk-width-1-3@m")
				.uk-card-header
					.uk-grid-small.uk-flex-middle(uk-grid)
						.uk-width-auto
							img.uk-border-circle(width='40' height='40' src='../assets/images/cathar-crux.svg')
						.uk-width-expand
							h3.uk-card-title.uk-margin-remove-bottom Engenhocas 
				.uk-card-body
					p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
				.uk-card-footer
					button.uk-button.uk-button-primary.uk-margin-small-right

			.uk-card.uk-card-primary(class="uk-width-1-3@m")
				.uk-card-header
					.uk-grid-small.uk-flex-middle(uk-grid)
						.uk-width-auto
							img.uk-border-circle(width='40' height='40' src='../assets/images/cathar-crux.svg')
						.uk-width-expand
							h3.uk-card-title.uk-margin-remove-bottom Engenhocas 
				.uk-card-body
					p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
				.uk-card-footer
					a.uk-button.uk-button-light(href='#')

			.uk-card.uk-card-default(class="uk-width-1-3@m")
				.uk-card-header
					.uk-grid-small.uk-flex-middle(uk-grid)
						.uk-width-auto
							img.uk-border-circle(width='40' height='40' src='../assets/images/cathar-crux.svg')
						.uk-width-expand
							h3.uk-card-title.uk-margin-remove-bottom Engenhocas 
				.uk-card-body
					p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
				.uk-card-footer
					a.uk-button.uk-button-secondary(href='#')



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
