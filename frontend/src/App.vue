<template>
  <div>
    <Navbar :logo="logo_src"/>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'


  export default {
    name: 'App',
    components: {
      Navbar
    },
    data() {
      return {
        logo_src: "/img/logo.png"
      }
    }
  }

</script>


<style>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 50px;
    min-height: 250px;;
  }



</style>
