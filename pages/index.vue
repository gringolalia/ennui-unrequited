	<template lang="pug">
.uk-animation-fade
	.uk-flex(style="height: 100vh")
		.uk-container-small.uk-align-center
			.uk-card.uk-card-body.uk-card-small.uk-text-center
				img(src="../assets/images/hammer-sickle.svg" width="175px")
				h1 Yesterday In Kathmandu
				h2.uk-margin-remove-top.uk-margin-medium-bottom Youngsters In Kindergarten
				a.uk-button.uk-button-primary.uk-margin-small-right(href="#down") Imprints
				a.uk-button.uk-button-default.uk-margin-small-right(href="sobre") Offprints
				a.uk-button.uk-button-primary(href="about") Footprints

	.uk-section(style="height: 100vh")
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
					.button.uk-button.uk-button-default.uk-margin-small-right Kludges

			.uk-card.uk-card-primary.uk-card-hover(class="uk-width-1-3@m")
				.uk-card-header
					.uk-grid-small.uk-flex-middle(uk-grid)
						.uk-width-auto
							img.uk-border-circle(width='40' height='40' src='../assets/images/cathar-crux.svg')
						.uk-width-expand
							h3.uk-card-title.uk-margin-remove-bottom Engenhocas 
				.uk-card-body
					p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
				.uk-card-footer
					button.uk-button.uk-button-default Impromptus

			.uk-card.uk-card-default.uk-card-hover(class="uk-width-1-3@m")
				.uk-card-header
					.uk-grid-small.uk-flex-middle(uk-grid)
						.uk-width-auto
							img.uk-border-circle(width='40' height='40' src='../assets/images/cathar-crux.svg')
						.uk-width-expand
							h3.uk-card-title.uk-margin-remove-bottom Engenhocas 
				.uk-card-body
					p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
				.uk-card-footer
					button.uk-button.uk-button-primary Bodges

		.uk-grid-collapse#down(uk-grid)
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
						.button.uk-button.uk-button-default.uk-margin-small-right Shambles

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
						.button.uk-button.uk-button-default.uk-margin-small-right Winging It

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
						.button.uk-button.uk-button-default.uk-margin-small-right Stopgaps

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

/* @import "../node_modules/uikit/dist/css/uikit.css"; */

.container {
	min-height: calc(100vh - 120px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>
