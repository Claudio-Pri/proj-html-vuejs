<script>
import {store} from '../store.js';

export default {
  data() {
    return {
      store, 
      message: 'App header',
      activeIndex: 1,
    }
  },
  methods: {
    quickActive(i) {
      console.log('cliccata lable');
      this.activeIndex = i;
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
                  <a @click="quickActive(i)" :class="{'active' : this.activeIndex == i}" :href="link.href">
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
          <div class="my-col-6 header-middle-left">
            <span class="lable">
              Development
            </span>
            <h1>
              A Complete <br> Developer Toolset
            </h1>
            <p>
              Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.
            </p>
            <div class="btn-container">
              <button class="blue-btn">Get Started</button>
              <button class="white-btn">Documentation</button>
            </div>
            <p>
              Current version: v2.6.0
            </p>
          </div>
          <div class="my-col-6">
            <img src="/img/about.png" alt="about">
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="header-bottom">
      <div class="container">
        <div class="my-row align-items-center">
          <div class="my-col-2" v-for="(link, i) in store.headerBottomLinks" :key="i">
            <a :href="link.href">
              <img :src="link.img" :alt="link.link">
            </a>
          </div>
          
          
          
        </div>
      </div>
      <!-- svg curva -->
      <div class="custom-shape-divider-top-1726831348">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
        </svg>
      </div>
    </div>
    
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

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
    box-shadow: 1px 1px 8px 0 $mainBlue;
    &:hover {
      background-color: $mainBlue;
      color: white;
    
    }

    
  }
  
}
.header-top .search-btn, .header-top .header-btn {
  padding: 8px;
  font-size: 1.2rem;
  margin-left: 10px;
  height: 40px;
  width: 40px;
  
}
.header-middle {
  padding-top: 100px;
  padding-bottom: 50px;
}
.header-middle .header-middle-left {
  padding: 80px 0;
  .lable {
    border: 1px solid $mainBgblue;
    border-radius:50px;
    background-color: $mainBgblue;
    color: $mainBlue;
    font-size: 0.8rem;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 15px;
    padding: 4px 10px;
  }
  h1 {
    font-size: 2.8rem;
    margin-bottom: 35px;
  }
  
  .btn-container {
    margin-bottom: 20px;
    &.btn-container> * {
      margin-right: 15px;
    }
  }
}
.header-middle .my-col-6 img {
  margin-left: 80px;
}

.header-bottom {
  position: relative;
  background-color: white;
  .my-col-2 {
    padding: 40px 0;
    img {
      max-width: 100px;
    }
  }
}
header hr {
  border: 1px solid $borderGray;
 }

.header-bottom .container  {
  position: relative;
  z-index: 1;
  
 }
.custom-shape-divider-top-1726831348 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    
}
.custom-shape-divider-top-1726831348 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 141px;
}

.custom-shape-divider-top-1726831348 .shape-fill {
    fill: #F8F9FC;
}

</style>
