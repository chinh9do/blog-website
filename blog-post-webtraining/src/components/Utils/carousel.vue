<template>
  <carousel class="p_top" :items-to-show="1" :wrap-around="true">
    <slide v-for="slide in 3" :key="slide">
      <div class="slider_bck" :style="{ background: `url(http://placebeard.it/1080/720)` }">
        <div class="slide_content">
          <div class="item">
            <div>Title</div>
            <span>Some content here Some content here Some content here Some
              content here Some content here Some content here Some content here
              Some content here</span>
          </div>
        </div>
      </div>
    </slide>

    <template #addons>
      <!-- <navigation /> -->
      <pagination />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() { },
};
</script>
<style scoped>
.p_top {
  padding-top: 20px;
}

.slide_content {
    position: absolute;
    bottom: 20px;
    text-align: left;
    width: 50%;
}

.slide_content .item {
    background: #191919b3;
    color: #fff;
    box-sizing: border-box;
    padding: 20px;
    font-size: 15px;
    font-weight: 100;
}

.slide_content .item div:first-child {
    font-size: 25px;
    font-weight: bold;
}

.carousel__pagination {
    padding-left: 0px;
}

.slider_bck {
    height: 350px;
    width: 100%;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    position: relative;
    
}
</style>
