<script>
import {store} from '../store.js';
import AppParagraph from './AppParagraph.vue';

export default {
  data() {
    return {
      store, 
      message: 'App main'
    }
  },
  components: {
    AppParagraph
  }
}
</script>

<template>
  <main>
    <section id="features">
      <div class="container">
        <div class="my-row">
            <div class="my-col-6">
              <h2>
                Key features
              </h2>

              <AppParagraph />
              
          </div>
        </div>

        <div class="my-row">
          <div class="my-col-3">
            <div class="card">
              <div class="features-icon">
                <i class="fa-solid fa-2x fa-layer-group"></i>
              </div>
              <h4>
                Modular
              </h4>
              <p>
                Composed in a pseudo-latin language which more or less corresponds.
              </p>
              <div>
                <a href="#">
                  Read More >
                </a>
              </div>
            </div>
          </div>
          <div class="my-col-3">
            <div class="card">
              <div class="features-icon">
                <i class="fa-solid fa-2x fa-tablet-screen-button"></i>
              </div>
              <h4>
                Responsive
              </h4>
              <p>
                Composed in a pseudo-latin language which more or less corresponds.
              </p>
              <div>
                <a href="#">
                  Read More >
                </a>
              </div>
            </div>
          </div>
          <div class="my-col-3">
            <div class="card">
              <div class="features-icon">
                <i class="fa-regular fa-2x fa-object-group"></i>
              </div>
              <h4>
                Customizable
              </h4>
              <p>
                Composed in a pseudo-latin language which more or less corresponds.
              </p>
              <div>
                <a href="#">
                  Read More >
                </a>
              </div>
            </div>
          </div>
          <div class="my-col-3">
            <div class="card">
              <div class="features-icon">
                <i class="fa-solid fa-2x fa-maximize"></i>
              </div>
              <h4>
                Scalable
              </h4>
              <p>
                Composed in a pseudo-latin language which more or less corresponds.
              </p>
              <div>
                <a href="#">
                  Read More >
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>

    <section id="quick-start">
      <div class="container">
        <div class="my-row">
          <div class="my-col-12 text-center">
            <h4>
              Quickstart
            </h4>
            <h2>
              Awesome isn't it? Let's dive in!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum pariatur quo neque laudantium excepturi officiis!
            </p>
            <div>
              Card bg dark
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="tools">
      <div class="container">
        <div class="my-row">
          <div class="my-col-6">left</div>
          <div class="my-col-6">right</div>
        </div>
      </div>
    </section>
    
    <section id="rates">
      <div class="container">
        <div class="my-row">
          <div class="my-col-12 text-center">
            <h2>
              Our rates for developer from landrick team
            </h2>
          </div>
        </div>
        <div class="my-row">
          <div class="my-col-12 text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi a nobis commodi hic dolor cupiditate.
            </p>
          </div>
        </div>
        <div class="my-row">
          <div class="my-col-4">
            <div class="card">
              card
            </div>
          </div>
          <div class="my-col-4">
            <div class="card">
              card
            </div>
          </div>
          <div class="my-col-4">
            <div class="card">
              card
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="action">
      <div class="container">
        <div class="my-row">
          <div class="my-col-12 text-center">
            <h4>
              Want to be among the first to find out?
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum pariatur quo neque laudantium excepturi officiis!
            </p>
            <form>
              form + button
            </form>
          </div>
        </div>
      </div>
    </section>

  </main>
  
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

main {
  margin-top: 100px;
}

#features .card  {
  border: 1px solid $borderGray;
  border-radius: 10px;
  padding: 30px;
  margin-right: 20px;
  margin-bottom: 20px;
  h4 {
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
    padding: 4px 0;
    font-weight:bold;
    //il colore $textBlue non sembra lo stesso del riferimento, ma neanche il $mainBlue. Problema di schermo?
    color: $textBlue;
  }
}
#features .card .features-icon {
  text-align: center;
  vertical-align: middle;

  //mistero
  line-height: 75px;

  width: 65px;
  height: 65px;
  border: none;
  border-radius: 5px;
  background-color: $mainBgblue;
  color: $mainBlue;
  margin-bottom: 35px;
  // box-shadow: 1px 1px 8px 0 $mainBlue;
}

//debug struttura
// #features .container {
//   min-height: 500px;
//   background-color: lightcoral;
// }
#quick-start .container {
  min-height: 500px;
  background-color: lightgoldenrodyellow;
}
#tools .container .my-col-6 {
  min-height: 500px;
  background-color: lightcoral;
  border: 1px solid blue;
}
#rates .container {
  min-height: 500px;
  background-color: lightgoldenrodyellow;
  .card {
    min-height: 250px;
    background-color: aqua;
    border: 1px solid blue;

  }
}
#action .container {
  min-height: 500px;
  background-color: lightcoral;
  border: 1px solid blue;
}


</style>
