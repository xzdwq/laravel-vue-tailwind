<template>
  <div>
    <header-navbar/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import HeaderNavbar from './HeaderNavbar';
  export default {
    components: {
      HeaderNavbar
    },
    mounted() {
      console.log("Component mounted.");
    },
  };
</script>