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
    <div class="footer-top">
      <div class="container">
        <div class="my-row">
          <div class="my-col-4">left</div>
          <div class="my-col-4">center</div>
          <div class="my-col-4">right</div>
        </div>
      </div>
    </div>
    <hr>
    <div class="footer-bottom">
      <div class="container">
        <div class="my-row">
          <div class="my-col-6">left</div>
          <div class="my-col-6">right</div>
        </div>
      </div>
      
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.footer-top .container {
  min-height: 400px;
  background-color: darkorchid;
}
.footer-bottom .container {
  min-height: 100px;
  background-color: darkmagenta;
}
</style>
