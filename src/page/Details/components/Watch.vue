<template>
  <div>
    <div class="container">
      <div class="text">
        <div class="data">数据和操控，我们更专业</div>
        <div class="NameId" @click="hitName">
          <div class="left"><span class="iconfont icon_id">&#xe611;&nbsp; </span>个人信息</div>
          <div class="right"><span class="iconfont icon_jiantou">&#xe7da;&nbsp; </span></div>
        </div>
      </div>

        <div class="up">
        <div class="left">
          <p class="tpt">{{list.emparture}} ℃</p>
          <span class="box-tpt">温度</span>
          <span class="iconfont icon1">&#xe634;</span>
        </div>
        <div class="right">
          <p class="tpt">{{list.humidity}} %RH</p>
          <span class="box-tpt">湿度</span>
          <span class="iconfont icon2">&#xe62f;</span>
        </div>
      </div>
      <div class="down">
        <div class="left">
          <p class="tpt">{{list.light}} Lux</p>
          <span class="box-tpt">光照强度</span>
          <span class="iconfont icon1">&#xe674;</span>
        </div>
        <div class="right">
          <p class="tpt">{{list.sound}} Db</p>
          <span class="box-tpt">分贝</span>
          <span class="iconfont icon2">&#xe73b;</span>
        </div>
      </div>

      <button></button>
    </div>
  </div>
</template>
<script>
import bus from '../../../assets/js/eventBus'
export default {
  name: 'DetailsWatch',
  data () {
    return {
      xinxi: false,
      list: {}
    }
  },
  props: {
    list1: Array
  },
  methods: {
    hitName () {
      this.xinxi = !this.xinxi
      bus.$emit('Inwatch', this.xinxi)
    }

  },
  mounted () {
    var self = this
    bus.$on('Inwatch', (isshow) => {
      self.xinxi = isshow
    })
    this.list = this.props.list1[this.$route.query.id]
    console.log(this.list)
  }

}
</script>
<style lang="stylus" scoped>
  .container
    width 92%
    margin 0 auto
    padding-top 20px
    .text
      width 100%
      .data
        color #000000
        font-weight bold
        text-align center
        line-height 30px
        font-size 18px
      .NameId
        margin-top 20px
        width 100%
        display flex
        background-color #f6f6f6
        float left
        border 1px solid #A6929A
        cursor: default;
        background: #fff url() repeat
        -webkit-box-shadow:0 5px 10px #666
        -moz-box-shadow:0 5px 10px #666
        box-shadow:0 3px 10px #666
        -moz-border-radius:5px
        -webkit-border-radius:5px
        -o-border-radius:5px
        border-radius:5px
        font-size 18px
        .left,.right
          width 50%
          height 50px
          flex 1
          font-weight bold
          line-height 50px
          padding-left 10px
        .right .icon_jiantou
            font-size 20px
            padding-left 100px
        .left
          .icon_id
            font-size 20px
            line-height 35px
    .up,.down
      margin-top 20px
      width 100%
      height 130px
      display flex
      background-color #f6f6f6
      float left
      border 1px solid #A6929A
      cursor: default;
      background: #fff url() repeat
      -webkit-box-shadow:0 5px 10px #666
      -moz-box-shadow:0 5px 10px #666
      box-shadow:0 3px 10px #666
      -moz-border-radius:5px
      -webkit-border-radius:5px
      -o-border-radius:5px
      border-radius:5px
      .left,.right
        width 50%
        height 130px
        flex 1
        .tpt
          font-family Arial
          font-weight bold
          text-align center
          padding-top 30px
        .box-tpt
          font-size 13px
          text-align center
          display block
          color #353538
          line-height 30px
        .icon1
          font-size 25px
          display block
          text-align center
          line-height 40px
          color skyblue
      .right
        border-left 5px solid #f3f3f3
        width 50%
        height 130px
        flex 1
        .icon2
          font-size 25px
          display block
          text-align center
          line-height 40px
          color skyblue
    .down > .left > .icon1
      font-size 25px

</style>
