<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <!-- <home-left></home-left> -->
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeLeft from './components/left'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeLeft
  }
}
</script>
