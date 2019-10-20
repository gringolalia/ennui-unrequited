<template lang="pug">

section.container
  div
    img(src="../assets/images/hammer-sickle.svg" width="175px")
    h1.title Youth In Kuwait      
    h1.subtitle You and I in the Kitchen
    button.uk-button.uk-button-primary Imprints
    button.uk-button.uk-button-secondary Offprints
    button.uk-button.uk-button-dark Footprints

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

.links {
  padding-top: 15px;
}

</style>
