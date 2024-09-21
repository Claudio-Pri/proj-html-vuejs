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
  <p>
    Start working with <span>Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.
  </p>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

p {
    font-size: 1.1rem;
    color: $textGray;
    margin-bottom: 35px;

    span {
        color: $mainBlue;
        font-weight: bold;
    }
}

</style>
