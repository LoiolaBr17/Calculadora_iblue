<template>
  <div id="nav">
      <router-link to="/" id="logo-url">
        <img :src="logo"  id="logo">
      </router-link> 
      <router-link to="/">Inicio</router-link> 
      <router-link to="/calculadora">Calculadora</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    props: ["logo"]
  }
</script>

<style scoped>
  #nav {
    background-color: #fff;
    border-bottom: 2px solid #111;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  #nav #logo-url {
   margin: auto;
   margin-left: 0;
  }

  #logo {
    widows: 60px;
    height: 60px;
  }

  #nav a {
    color: #808080;
    text-decoration: none;
    font-size: 17px;
    font-weight: 500;
    margin: 10px;
    transition: .5s;
  }

  #nav a:hover {
    color: #337ab7;
  }

</style>