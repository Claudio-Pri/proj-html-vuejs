<script>
import {store} from '../store.js';

export default {
  data() {
    return {
      store, 
      message: 'App header'
    }
  }
}
</script>

<template>
  <header>
    <div class="header-top">
      <div class="container">
        <div class="my-row">
          <div class="my-col-3">
            logo
          </div>

          <div class="my-col-6">
            <nav>
              <ul class="d-flex">
                <li v-for="(link, i) in store.headerLinks" :key="i">
                  link
                </li>
              </ul>
            </nav>
          </div>

          <div class="my-col-3">
            <nav>
              <div class="d-flex">
                <button>btn</button>
                <button>btn</button>
                <button>btn</button>
                <button>btn</button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="header-middle">
      <div class="container">
        <div class="my-row">
          <div class="my-col-6">footer mid left</div>
          <div class="my-col-6">footer mid right</div>
        </div>
      </div>
    </div>

    <div class="header-bottom">
      <div class="container">
        <div class="my-row">
          <div class="my-col-2">link</div>
          <div class="my-col-2">link</div>
          <div class="my-col-2">link</div>
          <div class="my-col-2">link</div>
          <div class="my-col-2">link</div>
          <div class="my-col-2">link</div>
        </div>
      </div>
    </div>
    
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


//debug struttura
.my-row>* {
  background-color: aquamarine;
  border: 1px solid red;
}
.header-top {
  padding: 20px 0;
  background-color: lightsalmon;

}
.header-middle .my-row {
  min-height: 500px;
  background-color: lightgreen;
}
// ul {
//   li {
//     padding: 20px;
//     margin-right: 10px;
//   }
// }

</style>
