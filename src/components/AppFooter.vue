<script>
import {store} from '../store.js';



export default {
  data() {
    return {
      store, 
      message: 'App footer'
    }
  },
  
}
</script>

<template>
  <footer>
    <div class="footer-top">
      <div class="container">
        <div class="my-row">
          <div class="my-col-4">
            <div>
              <img src="/public/img/logo-light.png" alt="Landrick">
            </div>
            <p>
              Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.
            </p>
            <div class="socials">
              <ul class="d-flex align-items-center">
                <li>
                  <a href="#">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="my-col-4 footer-links d-flex">
            <div>
              <h3>
              Company
              </h3>
              <ul>
                <li v-for="(link, i) in store.companyLinks" :key="i">
                  <a :href="link.href">
                    <i class="fa-solid fa-chevron-right"></i>
                    {{ link.link }}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>
              Usefull Links
              </h3>
              <ul>
                <li v-for="(link, i) in store.usefullLinks" :key="i">
                  <a :href="link.href">
                    <i class="fa-solid fa-chevron-right"></i>
                    {{ link.link }}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="my-col-4">
            <h3>
              Newsletter
            </h3>
            <p>
              Sign up and receive the latest tips via email.
            </p>
            <p>
              Write your email <span>*</span>
            </p>
            <form @submit.prevent="checkData()">
              <div class="input-group d-flex align-items-center">
                <div class="input-icon">
                  <i class="fa-regular fa-envelope"></i>
                </div>
                <input v-model="store.userEmail" type="text" placeholder="Your email :">
              </div>
              <div>
                <button type="submit" class="blue-btn">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container">
        <div class="my-row">
          <div class="my-col-6">
            <p>
              <i class="fa-regular fa-copyright"></i>
              2020 Landrick. Design with <span><i class="fa-solid fa-heart"></i></span>
              by Shreethemes.
            </p>
          </div>
          <div class="my-col-6">
            <div class="d-flex align-items-center payments">
              <div v-for="(method, i) in store.paymentMethods" :key="i">
                <img :src="method.url" :alt="method.lable">
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

footer {
  background-color: $secondaryBgBlue;
  
  .footer-top {
    padding: 50px 0;
    border-bottom: 1px solid $textGray;

      .my-col-4 {
          padding-right: 40px;
          img {
            max-width: 150px;
            margin-bottom: 25px;
          }
        .socials {
          ul {
            li {
              font-size: 1.2rem;
              border: 1px solid $textGray;
              border-radius: 8px;
              margin-right: 5px;
              text-align: center;
              width: 44px;
              height: 44px;
              padding:10px;
              a {
                color: $textGray;
              }
            }
          }
        }
      }
      h3 {
        color: white;
        margin-bottom: 30px;
      }
      .footer-links {
          &>* {
            margin-right: 60px;
          }
          ul {
            li {
              margin-bottom: 15px;
              a {
                text-decoration: none;
                color: $textGray;
                font-weight: 600;
                i {
                  font-size: 0.7rem;
                  margin-right: 8px;
                }
              }
              
            }
          }
      }
      
      form {
        .input-group {
          margin-bottom: 25px;
          font-size: 1.2rem;
          background-color: $tertiaryBgBlue;
          padding: 10px;
          .input-icon {
            color: $textGray;
            margin-right: 5px;
            
          }
          input {
            background-color: $tertiaryBgBlue;
            border: none;
            flex-grow: 1;
            padding: 5px;
          }
        }
        // input {
        //   border: none;
        //   font-size: 0.8rem;
        //   padding: 10px;
        //   border-radius: 5px;
        //   width: 100%;
        //   margin-bottom: 25px;
        //   background-color: $tertiaryBgBlue;
        // }
        .blue-btn {
          border: none;
          border-radius: 5px;
          width: 100%;
          background-color: $tertiaryBgBlue;
          color: $mainBlue;
          box-shadow: 0 2px 6px $mainBlue;


        }
    
      }
      
      
      
  }
  p{
      span {
        color: $textRed;
      }
    }
  .footer-bottom {
    padding: 40px 0;
    .payments {
      justify-content: end;
      img {
        width: 40px;
        margin-left: 10px;
      }
    }
  }
}


// .footer-top .container {
//   min-height: 400px;
//   background-color: darkorchid;
// }
// .footer-bottom .container {
//   min-height: 100px;
//   background-color: darkmagenta;
// }
</style>
