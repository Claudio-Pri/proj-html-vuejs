<script>
export default {
  data() {
    return { 
      message: 'App main'
    }
  }
}
</script>

<template>
  <main>
    <h1>
      {{ message }}
    </h1>
  </main>
  
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
