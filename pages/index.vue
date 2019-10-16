<template lang="pug">

section.container
  div
    img(src="../assets/images/hammer-sickle.svg" width="150px")
    h1.uk-heading-xlarge Youth In Kuwait
      
    h1.uk-heading-medium You and I in the Kitchen
    button.uk-button.uk-button-default Imprints
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
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'News Cycle', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-family: "News Cycle", sans-serif;
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
