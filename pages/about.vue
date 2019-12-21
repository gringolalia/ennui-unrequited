<template lang="pug">
.home.uk-margin-large-top

	.uk-flex.uk-flex-wrap.uk-flex-center

		.uk-card.uk-card-primary.uk-card-body.uk-hover.uk-margin-large-bottom.uk-margin-medium-right
			h1
				i.material-icons.md-72.uk-align-center toys
			h3 Addio Mondo Crudele
			a.uk-button.uk-button-default.uk-button-large(href="#downward")
				| Oppress Me


		.uk-card.uk-card-default.uk-card-body.uk-hover.uk-margin-large-bottom.uk-margin-medium-right
			h1
				i.material-icons.md-72 directions_bike
			h3 Addio Mondo Crudele
			button.uk-button.uk-button-default.uk-button-large
				i.fas.fa-sun.fa-2x.uk-margin-small-right
				| Oppress Me

		.uk-card.uk-card-secondary.uk-card-body.uk-hover.uk-margin-large-bottom
			h1
				i.material-icons.md-72 beach_access
			h3 Addio Mondo Crudele
			button.uk-button.uk-background-primary.uk-button-large
				i.material-icons.md-36.uk-margin-small-right all_inclusive
				| Oppress Me

		.uk-card.uk-card-default.uk-card-body.uk-hover.uk-margin-large-bottom.uk-margin-medium-right
			h1
				i.material-icons.md-72 code
			h3 Addio Mondo Crudele
			button.uk-button.uk-button-danger.uk-button-large
				i.material-icons.md-24.uk-margin-small-right toys
				| Oppress Me


		.uk-card.uk-card-default.uk-card-body.uk-hover.uk-margin-large-bottom.uk-margin-medium-right
			h1
				i.material-icons.md-72 toys
			h3 Addio Mondo Crudele
			button.uk-button.uk-button-default.uk-button-large
				i.fas.fa-sun.fa-2x.uk-margin-small-right
				| Oppress Me

		.uk-card.uk-card-default.uk-card-body.uk-hover.uk-margin-large-bottom
			h1
				i.material-icons.md-72 my_location
			h3 Addio Mondo Crudele
			button.uk-button.uk-button-primary.uk-button-large
				i.material-icons.md-36.uk-margin-small-right all_inclusive
				| Oppress Me

	.uk-flex.uk-flex-center.uk-margin-large-top#downward
	
		div(class="uk-child-width-1-3@m" uk-grid)
			.uk-card.uk-card-default.uk-card-body.uk-card-hover
			.uk-card-media-top
				img(src='../assets/images/morelinot.jpg' alt)
			.uk-card-body
				h3.uk-card-title Infernal Machine Seven
				p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
				button.uk-button.uk-button-primary.uk-button-medium.uk-align-center More Info
		div
			.uk-card.uk-card-default.uk-card-body.uk-card-hover
			.uk-card-body
				h3.uk-card-title Infernal Machine Eight
				p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
				button.uk-button.uk-button-primary.uk-button-medium.uk-align-center More Info
			.uk-card-media-bottom
				img(src='../assets/images/morelinot.jpg' alt)

		div
			.uk-card.uk-card-default.uk-card-body.uk-card-hover
			.uk-card-media-top
				img(src='../assets/images/morelinot.jpg' alt)
			.uk-card-body
				h3.uk-card-title Infernal Machine Nine
				p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
				button.uk-button.uk-button-primary.uk-button-medium.uk-align-center More Info

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
