<script>
import {store} from '../store.js';

export default {
  data() {
    return {
      store, 
      message: 'App main'
    }
  }
}
</script>

<template>
  <main>
    <h1>
      {{ message }}
    </h1>
  </main>
  
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


</style>
