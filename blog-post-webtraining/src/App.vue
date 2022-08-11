<template>
  <div>
    <Header></Header>
    <router-view />
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
@import "./assets/app-style.css";

#app {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
