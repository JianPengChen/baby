<template>
<div>
  <swiper>
    <swiper-slide class="container">
      <div class="c_img "  v-for="(item, index) in list" :key="index"><router-link :to="{path:'/details', query:{id:list[index].id}}"><span class="iconfont logo animated swing">&#xe616;</span><li>{{list[index].name}}</li></router-link></div>
    </swiper-slide>
    <swiper-slide class="container">
      <div class="c_img "  v-for="(item, index) in list" :key="index"><router-link :to="{path:'/details', query:{id:list[index].id}}">><span class="iconfont logo animated swing">&#xe616;</span><li>{{list[index].name}}</li></router-link></div>
    </swiper-slide>
  </swiper>
</div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          loop: true
        }
      },
      list: {}
    }
  },
  methods: {
    getdatainInfon () {
      this.$http.get('/incubator/getActivedIncubators').then(res => {
        this.list = res.data.data.list
      })
    }
  },
  mounted () {
    this.getdatainInfon()
  }
}
</script>
<style lang="stylus" scoped>
  .container
    width 92%
    // background-color #000000
    position relative
    overflow hidden
    margin 0 auto
    .c_img
      height 130px
      width 40%
      background-color #f6f6f6
      margin 20px 15px 10px 15px
      float left
      border 1px solid #A6929A
      cursor: default;
      background: #fff url(http://tympanus.net/Tutorials/OriginalHoverEffects/images/bgimg.jpg) repeat
      -webkit-box-shadow:0 5px 10px #666
      -moz-box-shadow:0 5px 10px #666
      box-shadow:0 3px 10px #666
      -moz-border-radius:5px
      -webkit-border-radius:5px
      -o-border-radius:5px
      border-radius:5px
      span
        padding-top 30px
        display block
        font-size 60px
        color black
        text-align center
        line-height 50px
      li
        list-style none
        font-size 14px
        text-align center
        color #A8A3A5
        line-height 40px
        text-decoration none

  .button1
    border-radius 40px
    height 40px
    width 100px
    position absolute
    background-color skyblue
    color #fff
    left 35%
    bottom 5%
    font-size 14px
</style>
