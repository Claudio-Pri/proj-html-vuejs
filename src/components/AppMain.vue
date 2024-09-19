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
    <section id="features">
      <div class="container">
        <div class="my-row">
            <div class="my-col-6">
              <h2>
                Key features
              </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi unde illo repellendus consequuntur quidem accusantium fugit inventore voluptatibus ratione quae?</p>
          </div>
        </div>
        <div class="my-row">
          <div class="my-col-3">
            card
          </div>
          <div class="my-col-3">
            card
          </div>
          <div class="my-col-3">
            card
          </div>
          <div class="my-col-3">
            card
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


//debug struttura
#features .container {
  min-height: 500px;
  background-color: lightcoral;
}
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
