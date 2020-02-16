<template lang="pug">
div
	div(uk-sticky='sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky')
		nav.uk-navbar-container.uk-margin(uk-navbar)
			.uk-navbar-left
				a.uk-navbar-item.uk-logo(href="	/")
					img(src="../assets/images/cathar-crux.svg" width="60px")
					| &nbsp; Engenho Novo LLC

				a.uk-navbar-item(class="uk-visible@m" href="/about")
					span.uk-margin-small-right(uk-icon='icon: nut ; ratio: 2')
					| CONFIGURAR

				a.uk-navbar-item(class="uk-visible@m" href="/cadillac")
					span.uk-margin-small-right(uk-icon='icon: git-fork; ratio: 2'  )
					| BIFURCAR

				a.uk-navbar-item(class="uk-visible@m" href="/rolls")
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
										a(href='/cadillac') Cadillac
									li
										a(href='/ford') Ford
									li
										a(href='/dodge') Dodge
									li
										a(href='/chevrolet') Chevrolet
									li
										a(href='/mercury') Mercury
									li
										a(href='/chrysler') Chrysler
									li
										a(href='lincoln') Lincoln
									li.uk-nav-header British Motorcars
									li
										a(href='/jaguar') Jaguar
									li
										a(href='/rolls') Rolls-Royce
									li
										a(href='/bentley') Bentley
									li
										a(href='/land-rover') Land Rover
									li
										a(href='/aston-martin') Aston Martin
									li
										a(href='/lotus') Lotus
									li
										a(href='/mclaren') McLaren
									li
										a(href='/vauxhall') Vauxhall
	nuxt
		.uk-animation-fade
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=News+Cycle|Naterial+Icons");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css");

@import url("../assets/styles/main.css");

/* @import "../node_modules/uikit/dist/css/uikit.css"; */
/* @import "../assets/styles/main.css"; */
/* @import "../assets/scss/main.css"; */

a:hover	 {
	text-decoration: none;
}

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
.material-icons.md-56 { font-size: 56px; }
.material-icons.md-64 { font-size: 64px; }
.material-icons.md-72 { font-size: 72px; }
.material-icons.md-80 { font-size: 80px; }

.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

.material-icons.md-light { color: rgba(255, 255, 255, 1); }
.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }
</style>
