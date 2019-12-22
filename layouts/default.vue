<template lang="pug">
div
	div(uk-sticky='sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar')
		nav.uk-navbar-container.uk-margin(uk-navbar)
			.uk-navbar-left
				a.uk-navbar-item.uk-logo(href='/')
					img(src="../assets/images/cathar-crux.svg" width="60px")
					| &nbsp; Engenho Novo LLC
				ul.uk-navbar-nav
					.uk-navbar-item(class="uk-visible@m" href="sobre")
							span.uk-margin-small-right(uk-icon='icon: nut ; ratio: 2')
							| CONFIGURAR

				.uk-navbar-item(class="uk-visible@m")
					span.uk-margin-small-right(uk-icon='icon: git-fork; ratio: 2'  )
					| BIFURCAR

				.uk-navbar-item(class="uk-visible@m")
					span.uk-margin-small-right(uk-icon='icon: social; ratio: 2'  )
					| EMPURRAR
	nuxt
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=News+Cycle|Naterial+Icons");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css	");

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
