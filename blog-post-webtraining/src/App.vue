<template>
  <div>
    <Header></Header>
    <!-- <Loader /> -->
    <router-view />
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Utils/loader";

export default {
  components: {
    Header,
    Footer,
    Loader
  },
};
</script>
<style>
@import "./assets/app-style.css";

#app {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
