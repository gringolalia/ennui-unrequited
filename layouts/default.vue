<template lang="pug">
div
	div(uk-sticky='sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar')
		nav.uk-navbar-container.uk-margin(uk-navbar)
			.uk-navbar-left
				a.uk-navbar-item.uk-logo(href='#')
					//- i.fas.fa-university
					span(uk-icon='icon: commenting; ratio: 3')
					| &nbsp; Engenho Novo LLC
				ul.uk-navbar-nav
					li
						a(href='#')
							span.uk-icon.uk-margin-small-right(uk-icon='icon: nut ; ratio: 2')
							| Configurações

				.uk-navbar-item
					span.uk-icon.uk-margin-small-right(uk-icon='icon: git-fork; ratio: 2')
					| BIFURCAÇÕES

				.uk-navbar-item
					span.uk-icon.uk-margin-small-right(uk-icon='icon: social; ratio: 2')
					| SOCIOPATIA
					//- form(action='javascript:void(0)')
					//- 	input.uk-input.uk-form-width-small(type='text' placeholder='Input')
					//- 	button.uk-button.uk-button-secondary IMPRIMIR
	nuxt
		
		
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=News+Cycle|Naterial+Icons");
@import "../assets/styles/main.css";

html {
	font-family: 'News Cycle', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, 'Helvetica Neue', Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}

.button--green {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #3b8070;
	color: #3b8070;
	text-decoration: none;
	padding: 10px 30px;
}

.button--green:hover {
	color: #fff;
	background-color: #3b8070;
}

.button--grey {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #35495e;
	color: #35495e;
	text-decoration: none;
	padding: 10px 30px;
	margin-left: 15px;
}

.button--grey:hover {
	color: #fff;
	background-color: #35495e;
}
</style>
