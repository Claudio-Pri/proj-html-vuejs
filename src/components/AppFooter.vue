<script>
export default {
  data() {
    return { 
      message: 'App footer'
    }
  }
}
</script>

<template>
  <footer>
    <h1>
      {{ message }}
    </h1>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
  background-color: $mainBgColor;
  text-align: center;
  padding: 20px 0;
}

h1 {
  color: $mainColor;
}
</style>
