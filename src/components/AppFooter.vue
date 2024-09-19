<script>
import {store} from '../store.js';

export default {
  data() {
    return {
      store, 
      message: 'App footer'
    }
  }
}
</script>

<template>
  <footer>
    <h1>
      {{ message }}
    </h1>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


</style>
