<template lang="pug">
div
	div(uk-sticky='sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky')
		nav.uk-navbar-container.uk-margin(uk-navbar)
			.uk-navbar-left
				a.uk-navbar-item.uk-logo(href="	/")
					img(src="../assets/images/cathar-crux.svg" width="60px")
					| &nbsp; Engenho Novo LLC

				a.uk-navbar-item(class="uk-visible@m")
					span.uk-margin-small-right(uk-icon='icon: nut ; ratio: 2')
					| CONFIGURAR

				.uk-navbar-item(class="uk-visible@m")
					span.uk-margin-small-right(uk-icon='icon: git-fork; ratio: 2'  )
					| BIFURCAR

				.uk-navbar-item(class="uk-visible@m")
					span.uk-margin-small-right(uk-icon='icon: social; ratio: 2'  )
					| EMPURRAR

			.uk-navbar-right
				.uk-navbar-item
					.uk-navbar-nav
						li
							button.uk-icon-button.uk-margin-medium-right(uk-icon='icon: menu; ratio: 5' class="uk-invisible@l")
							div(uk-dropdown)
								ul.uk-nav.uk-dropdown-nav
									li.uk-nav-header American Autos
									li.uk-active
										a(href='#') Cadillac
									li
										a(href='#') Ford
									li
										a(href='#') Dodge
									li
										a(href='#') Chevrolet
									li
										a(href='#') Mercury
									li
										a(href='#') Studebaker
									li.uk-nav-header British Cars
									li
										a(href='#') Jaguar
									li
										a(href='#') Rolls-Royce
									li
										a(href='#') Bentley
									li.uk-nav-divider
									li
										a(href='#') Aston Martin
									li
										a(href='#') Mercury
									li
										a(href='#') McLaren
									li
										a(href='#') Vauxhall
	nuxt
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=News+Cycle|Naterial+Icons");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css	");

@import "../node_modules/uikit/dist/css/uikit.css";

nav, .dignity, .uk-navbar-item  {
	font-family: 'News Cycle', sans-serif !important;
	font-weight: 300 !important;
	font-style: normal !important;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}

.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }
.material-icons.md-72 { font-size: 72px; }

.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

.material-icons.md-light { color: rgba(255, 255, 255, 1); }
.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }
</style>
