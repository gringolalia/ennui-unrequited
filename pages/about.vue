<template lang="pug">
.uk-animation-fade
		.home.uk-margin-large-top

		.uk-flex.uk-flex-wrap.uk-flex-center.uk-text-center

			.uk-card.uk-card-primary.uk-card-body.uk-hover.uk-margin-large-bottom.uk-margin-medium-right
				span.uk-margin-small-right(uk-icon='icon: cog; ratio: 3')
				h3 Addio Mondo Crudele
				a.uk-button.uk-button-default.uk-button-large(href='#modal-sections' uk-toggle) All Modal Cons
				#modal-sections(uk-modal)
					.uk-modal-dialog.uk-margin-auto-vertical
						button.uk-modal-close-default(type='button' uk-close)
						.uk-modal-header.uk-background-muted
							h2.uk-modal-title
								i.fas.fa-sun.fa-2x.uk-margin-small-right
								| Engenho Novo LLC
						.uk-modal-body
							p Φαβθλασ οπορτεατ ρεπρεηενδθντ cθμ ει. Ιν ασσθμ cονγθε δοcενδι qθι, vιξ ετ ιμπετθσ θτροqθε δολορεμ. Ει qθισ αλιqθιπ προδεσσετ vιξ. Qθι ερρορ σεμπερ απειριαν νε, εστ τε λαβορε δοcτθσ νεcεσσιτατιβθσ. Ρεqθε σcριπτα νε vιξ, μελ αδ μθνδι cονσεqθατ δεφινιτιονεσ, νεc ποσσε ιισqθε vολθμθσ αν.
						.uk-modal-footer.uk-text-right.uk-background-muted
							button.uk-button.uk-button-secondary.uk-modal-close.uk-margin-small-right(type='button') Cancel
							button.uk-button.uk-button-primary.uk-modal-close(type='button') Save


			.uk-card.uk-card-default.uk-card-body.uk-hover.uk-margin-large-bottom.uk-margin-medium-right
				span.uk-margin-small-right(uk-icon='icon: git-fork; ratio: 3')
				h3 Addio Mondo Crudele
				button.uk-button.uk-button-default.uk-button-large
					i.uk-icon-user.uk-margin-small-right
					| Impress Me

			.uk-card.uk-card-secondary.uk-card-body.uk-hover.uk-margin-large-bottom
				span.uk-margin-small-right(uk-icon='icon: quote-right; ratio: 3')
				h3 Addio Mondo Crudele
				button.uk-button.uk-background-primary.uk-button-large
					i.uk-icon-heart.uk-margin-small-right
					| Depress Me

			.uk-card.uk-card-default.uk-card-body.uk-hover.uk-margin-large-bottom.uk-margin-medium-right
				span.uk-margin-small-right(uk-icon='icon: comment; ratio: 3')
				h3 Addio Mondo Crudele
				button.uk-button.uk-button-danger.uk-button-large
					| Reprint Me


			.uk-card.uk-card-default.uk-card-body.uk-hover.uk-margin-large-bottom.uk-margin-medium-right
				span.uk-margin-small-right(uk-icon='icon: gitter; ratio: 3')
				h3 Addio Mondo Crudele
				button.uk-button.uk-button-secondary.uk-button-large
					i.fas.fa-sun.fa-2x.uk-margin-small-right
					| Offprint Me

			.uk-card.uk-card-default.uk-card-body.uk-hover.uk-margin-large-bottom
				span.uk-margin-small-right(uk-icon='icon: commenting; ratio: 3')
				h3 Addio Mondo Crudele

				button.uk-button.uk-button-primary.uk-button-large
					i.fas.fa-university.fa-2x.uk-margin-small-right
					| Imprint Me 

		//- .uk-flex.uk-flex-center.uk-margin-large-top#downward
		
		//- 	div(class="uk-child-width-1-3@m" uk-grid)
		//- 		.uk-card.uk-card-default.uk-card-body.uk-card-hover
		//- 		.uk-card-media-top
		//- 			img(src='../assets/images/morelinot.jpg' alt)
		//- 		.uk-card-body
		//- 			h3.uk-card-title Infernal Machine Seven
		//- 			p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
		//- 			button.uk-button.uk-button-primary.uk-button-medium.uk-align-center More Info
		//- 	div
		//- 		.uk-card.uk-card-default.uk-card-body.uk-card-hover
		//- 		.uk-card-body
		//- 			h3.uk-card-title Infernal Machine Eight
		//- 			p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
		//- 			button.uk-button.uk-button-primary.uk-button-medium.uk-align-center More Info
		//- 		.uk-card-media-bottom
		//- 			img(src='../assets/images/morelinot.jpg' alt)

		//- 	div
		//- 		.uk-card.uk-card-default.uk-card-body.uk-card-hover
		//- 		.uk-card-media-top
		//- 			img(src='../assets/images/morelinot.jpg' alt)
		//- 		.uk-card-body
		//- 			h3.uk-card-title Infernal Machine Nine
		//- 			p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
		//- 			button.uk-button.uk-button-primary.uk-button-medium.uk-align-center More Info

</template>

<style>

@import url("https://fonts.googleapis.com/css?family=Naterial+Icons");

.container {
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'News Cycle', sans-serif;
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
