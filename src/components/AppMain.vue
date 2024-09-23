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
  },
  methods: {
    checkData() {
      if(store.userEmail.trim() != '') {
        console.log('userEmail: ', store.userEmail);
      }  
    }
  },
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
            <AppParagraph />
            <div class="card">
              <div class=" d-flex justify-content-between lable-container">
                <div class="card-lable" :class="{'active' : item.active == true}" v-for="(item, i) in store.quickStart" :key="i">
                  <div>
                    {{ item.itemName }}
                  </div>
                </div>
              </div>
              <div v-for="(item, i) in store.quickStart" :key="i">
                <div class="d-flex" v-if="item.active == true">
                  <span>$</span>
                  <p>{{ item.commandOne }}</p>
                  <span>-g</span>
                  <p>{{ item.commandTwo }}</p>

                </div>
              </div>
              
            </div>
            <div class="perks d-flex">
              <span>
                <i class="fa-regular fa-circle-check"></i>
              </span>
              <p>Organize your data</p>
              <span>
                <i class="fa-regular fa-circle-check"></i>
              </span>
              <p>Work with any team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="tools">
      <div class="container">
        <div class="my-row">
          <div class="my-col-6 left-col">
            <h2>
              Build tools and extensive documentation
            </h2>
            <p>
              You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.
            </p>
            <ul>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                Digital Marketing Solutions for Tomorrow
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                Our Talented & Experienced Marketing Agency
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                Create your own skin to match your brand
              </li>
            </ul>
            <div class="btn-container">
              <button class="blue-btn">Read More <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
          </div>
          <div class="my-col-6">
            <img src="/img/1.png" alt="tools">
          </div>
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
            <AppParagraph />
          </div>
        </div>
        <!-- Rates card -->
        <div class="my-row">
          <div class="my-col-4" v-for="(rate, i) in store.ourRates" :key="i">
            <div class="card">
              <div class="lable">
                {{ rate.lable }}
              </div>
              <h1>
                {{ rate.price }}
              </h1>
              <p>
                Per Month
              </p>
              <p>
                {{ rate.description }}
              </p>
              <hr>
              <ul>
                <li v-for="(perk, i) in rate.included" :key="i">
                  <i class="fa-regular fa-circle-check"></i>
                  {{ perk }}
                </li>
              </ul>
              <div class="blue-btn text-center">
                Buy Now
              </div>
              <p>
               *No credit card required 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="action">
      <div class="container">
        <div class="my-row">
          <div class="my-col-12 text-center">
            <h2>
              Want to be among the first to find out?
            </h2>

            <AppParagraph />
            
            <form @submit.prevent="checkData()">
              <input v-model="store.userEmail" type="text" placeholder="Email Address">
              <button type="submit" class="blue-btn">
                Get Started
              </button>
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

#quick-start {
  padding: 50px 0;
  h4 {
    color: $mainBlue;
    margin-bottom: 20px;
  }
  .card {
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 20px;
    color: white;
    background-color: $mainGray;
    padding: 30px;
    border-radius: 8px;
    .lable-container {
      background-color: $textGray;
      border: 1px solid $textGray;
      border-radius: 8px;
      margin-bottom: 20px;
      .card-lable {
        padding: 10px 30px;
        width: 25%;
        font-weight: bold;
        border-radius: 8px;

        &.active {
          background-color: $mainGray;
        }

      }

    }
    span {
      color: $textGreen;
      font-weight: bold;
      margin-right: 6px;
    }
    p {
      font-weight: bold;
      margin-right: 10px;
      margin-bottom: 0;

    }
  }
  .perks {
    max-width: 600px;
    margin: 0 auto;
    span {
      color: $textGreen;
      font-weight: bold;
      margin-right: 6px;
    }
    p {
      
      margin-right: 10px;
      margin-bottom: 0;

    }
  }
}

#tools {
  padding: 50px 0;
  .left-col {
    padding-top: 60px;
    padding-right: 60px;
    ul {
      margin-bottom: 30px;
      li {
        margin-bottom: 20px;
        color: $textGray;
        i {
          color: $mainBlue;
        }
      }
    }
  }
}

#rates {
  padding: 50px 0;
  .card {
    border: 1px solid $borderGray;
    border-radius: 10px;
    padding: 30px;
    margin-right: 20px;
    margin-bottom: 20px;
    box-shadow: 0 3px 0 $lightGray;

    .lable {
      border: 1px solid $mainBgblue;
      border-radius:50px;
      background-color: $mainBgblue;
      color: $mainBlue;
      font-size: 0.8rem;
      font-weight: bold;
      display: inline-block;
      margin-bottom: 15px;
      padding: 8px 20px;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 20px;
    }
    hr {
      margin-bottom: 20px;
      border: 1px solid $borderGray;
    }
    ul {
      margin-bottom: 30px;
      li {
        margin-bottom: 15px;
        color: $textGray;
        i {
          color: $mainBlue;
        }
      }
    }
    .blue-btn {
        margin-bottom: 20px;
    }
  }
}

#action {
  padding: 50px 0;

  form {
    display:flex;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid $borderGray;
    border-radius: 50px;
    width: 600px;
    margin: 0 auto;
    margin-bottom: 80px;
    input {
      border: none;
      font-size: 1.1rem;
      padding: 10px;
      border-radius: 50px;
      flex-grow: 1;
    }
    .blue-btn {
      border-radius: 50px;

    }
    
  }
}

//debug struttura
// #features .container {
//   min-height: 500px;
//   background-color: lightcoral;
// }
// #quick-start .container {
//   min-height: 500px;
//   background-color: lightgoldenrodyellow;
// }
// #tools .container .my-col-6 {
//   min-height: 500px;
//   background-color: lightcoral;
//   border: 1px solid blue;
// }
// #rates .container {
//   min-height: 500px;
//   background-color: lightgoldenrodyellow;
//   .card {
//     min-height: 250px;
//     background-color: aqua;
//     border: 1px solid blue;

//   }
// }
// #action .container {
//   min-height: 500px;
//   background-color: lightcoral;
//   border: 1px solid blue;
// }


</style>
