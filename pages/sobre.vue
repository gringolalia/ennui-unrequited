<template lang="pug">

.uk-flex.uk-flex-wrap.uk-flex-center
	div(class="uk-child-width-expand@s" uk-grid)
		.uk-card.uk-card-default.uk-card-body.uk-card-hover
			.uk-card-media-top
				img(src='../assets/images/morelinot.jpg' alt)
			.uk-card-body
				h3.uk-card-title Infernal Machine Seven
				p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
				button.uk-button.uk-button-primary.uk-button-medium.uk-align-center More Info

		.uk-card.uk-card-default.uk-card-body.uk-card-hover
			.uk-card-body
				h3.uk-card-title Infernal Machine Eight
				p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
				button.uk-button.uk-button-primary.uk-button-medium.uk-align-center More Info
			.uk-card-media-bottom
				img(src='../assets/images/morelinot.jpg' alt)

		.uk-card.uk-card-default.uk-card-body.uk-card-hover
			.uk-card-media-top
				img(src='../assets/images/morelinot.jpg' alt)
			.uk-card-body
				h3.uk-card-title Infernal Machine Nine
				p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.

				button.uk-button.uk-button-primary.uk-margin-small-right(type='button' uk-toggle='target: #modal-example') All Mod Cons


				#modal-example(uk-modal)
					.uk-modal-dialog.uk-modal-body.uk-margin-auto-vertical
						h2.uk-modal-title 
							i.fas.fa-sun.fa-2x.uk-margin-small-right
							| Engenho Novo LLC
						p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						p.uk-text-right
							button.uk-button.uk-button-secondary.uk-modal-close.uk-margin-small-right(type='button') Negatory
							button.uk-button.uk-button-primary(type='button') Positively

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
