<template>
  <div>
    <Header v-if="isShowHeader"></Header>
    <!-- <Loader /> -->
    <router-view />
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Utils/loader";
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
    Footer,
    Loader
  },
  computed: {
    ...mapGetters({ toastMsg: 'notify/getToastMsg' }),
    isShowHeader() {
      return !this.$route.path?.includes('dashboard');
    }
  },
  watch: {
    toastMsg(toastMsg) {
      if (toastMsg[0] == true) {
        if (toastMsg[2] === 'error') {
          this.$toast.error(toastMsg[1])
        }
        else {
          this.$toast.success(toastMsg[1])
        }
      }
    }
  }
};
</script>
<style>
@import "./assets/app-style.css";

#app {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
