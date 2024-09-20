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
            <a href="#">
              <img src="/public/img/logo-dark.png" alt="Landrick">
            </a>
            
          </div>

          <div class="my-col-6 d-flex align-items-center">
            <nav>
              <ul class="d-flex align-items-center">
                <li v-for="(link, i) in store.headerLinks" :key="i">
                  <a :class="{'active' : link.active == true}" :href="link.href">
                    {{ link.link }}
                    <span v-if="i != 0"><i class="fa-solid fa-chevron-down"></i></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="my-col-3 btn-container d-flex align-items-center">
                <button class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                <button class="header-btn"><i class="fa-brands fa-github"></i></button>
                <button class="header-btn"><i class="fa-brands fa-stack-overflow"></i></button>
                <button class="header-btn"><i class="fa-regular fa-user"></i></button>
          </div>
        </div>
      </div>
    </div>

    <div class="header-middle">
      <div class="container">
        <div class="my-row">
          <div class="my-col-6">header mid left</div>
          <div class="my-col-6">header mid right</div>
        </div>
      </div>
    </div>

    <div class="header-bottom">
      <div class="container">
        <div class="my-row">
          <div class="my-col-2" v-for="(link, i) in store.headerBottomLinks" :key="i">
            link  
          </div>
          
          
        </div>
      </div>
    </div>
    
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


//debug struttura
// .my-row>* {
//   background-color: aquamarine;
//   border: 1px solid red;
// }
header {
  background-color: $lightBg;
}
.header-top {
  padding: 15px 0;
  .my-col-3 {
    padding: 10px 0;
  }

}
.header-top .my-col-6 nav {
  flex-grow:1;
  
  li {
    padding: 10px 5px;
  }

}
.header-top .my-col-6 ul {
  justify-content: space-around;
  
  li {
   a {
      padding: 10px 5px;
      text-decoration: none;
      text-transform: uppercase;
      color: $mainGray;
      font-weight: bold;
      
      &.active {
        color: $mainBlue;
      }
    }
  }

}
.header-top .my-col-3 img {
  width: 150px;

}

.header-top .btn-container {
  justify-content: flex-end;
  .search-btn {
    border: none;
    background: none;
    color: $lightGray;
  }
  .header-btn {
    border: 1px solid $mainBgblue;
    border-radius: 5px;
    background-color: $mainBgblue;
    color: $mainBlue;
    
  }
  
}
.header-top .search-btn, .header-top .header-btn {
  padding: 8px;
  font-size: 1.2rem;
  margin-left: 6px;
  height: 40px;
  width: 40px;
  
}
.header-middle .my-row {
  min-height: 500px;
  background-color: lightgreen;
}


</style>
