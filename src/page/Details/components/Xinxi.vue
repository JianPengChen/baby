<template>
  <div>
    <div class="container" v-show="this.isshow" @click="back">
      <div class="text">
        <div class="wrapper">
          <div class="name"><span>姓名：{{list3[this.$route.query.id].name}}</span></div>
          <div class="age">年龄：{{list3[this.$route.query.id].age}}</div>
          <div class="parents"><p>家长姓名：{{list3[this.$route.query.id].parentName}}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 电话：{{list3[this.$route.query.id].tel}}</p></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bus from '../../../assets/js/eventBus'
export default {
  name: 'DetailsXinxi',
  data () {
    return {
      isshow: false
    }
  },
  props: {
    list3: Array
  },
  mounted () {
    var self = this
    bus.$on('Inwatch', (xinxi) => {
      self.isshow = xinxi
    })
  },
  methods: {
    back () {
      this.isshow = !this.isshow
      bus.$emit('Inwatch', this.isshow)
    }
  }

}
</script>
<style lang="stylus" scoped>
  .container
    position fixed
    display flex
    flex-direction column
    justify-content center
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background #000
    .text
      height 0
      padding-bottom 100%
      width 100%
      background-color #fff
      .wrapper
        width 94%
        height 300px
        margin auto
        position relative
        background-color #878A91
        background-color rgba(0,0,0,0.2)
        margin-top 20px
        background url('../../../images/bg.jpg')
        background-size 350px
        .name,.age,.parents
          position absolute
          top 10%
          left 60%
          font-family Sans-serif
          font-weight bold
        .age
          top 20%
          line-height 30px
        .parents
          top 80%
          left 5%
          font-size 16px
          width 50%
          line-height 30px
</style>
