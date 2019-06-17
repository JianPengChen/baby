<template>
  <div>
    <div class="container">
      <div class="control-tmp">
        <span class="text">调节温湿度</span>
        <span class="iconfont reduce" @click="recude_num1()">&#xe692;</span>
        <span class="number">{{list.velocity}}</span>
        <span class="iconfont add" @click="add_num1()">&#xe608;</span>
      </div>
      <div class="control-led">
         <span class="text">调节光照</span>
        <span class="iconfont reduce" @click="recude_num3()">&#xe692;</span>
        <span class="number">{{list.lightLevel}}</span>
        <span class="iconfont add"  @click="add_num3()">&#xe608;</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailsControl',
  data () {
    return {
      postDataLight: '',
      postDataVelocity: '',
      list: {}
    }
  },
  props: {
    list2: Array
  },
  methods: {
    postDataInfo () {
      let id = this.list.id
      let velocity = this.postDataVelocity
      let postData = {
        'id': id,
        'velocity': velocity
      }
      postData = JSON.stringify(postData)
      console.log(postData)
      this.$http({
        method: 'post',
        url: '/incubator/changeVelocity',
        data: postData
      }).then((res) => {
        console.log(res)
      })
    },
    postDataInfo1 () {
      let id = this.list.id
      let lightLevel = this.postDataLight
      let postData = {
        'id': id,
        'lightLevel': lightLevel
      }
      postData = JSON.stringify(postData)
      console.log(postData)
      this.$http({
        method: 'post',
        url: '/incubator/changeLight',
        data: postData
      }).then((res) => {
        console.log(res)
      })
    },

    recude_num1 () {
      if (this.list.velocity && this.list.velocity > 0) {
        this.list.velocity = this.list.velocity - 1
        this.postDataVelocity = this.list.velocity
      }
      this.postDataInfo()
    },

    recude_num3 () {
      if (this.list.lightLevel && this.list.lightLevel > 0) {
        this.list.lightLevel = this.list.lightLevel - 1
        this.postDataLight = this.list.lightLevel
        this.postDataInfo1()
      }
    },
    add_num1 () {
      if (this.list.velocity > 0 || this.list.velocity === 0) {
        this.list.velocity = parseInt(this.list.velocity) + 1
        this.postDataVelocity = this.list.velocity
      }
      this.postDataInfo()
    },
    add_num3 () {
      if (this.list.lightLevel > 0 || this.list.lightLevel === 0) {
        this.list.lightLevel = parseInt(this.list.lightLevel) + 1
        this.postDataLight = this.list.lightLevel
        this.postDataInfo1()
      }
    }
  },
  mounted () {
    this.list = this.props.list2[this.$route.query.id]
    console.log(this.list)
  },
  created () {

  }
}
</script>
<style lang="stylus" scoped>
  .container
    width 92%
    margin 0 auto
    padding-top 10px
    .control-tmp >.reduce
      padding-left 30%
    .control-led > .reduce
      padding-left 35.7%
    .control-tmp,.control-led
      width 92%
      height 40px
      margin 10px auto
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
      .text
        font-size 20px
        line-height 40px
        padding-left 30px
        font-weight bold
      .reduce
        color skyblue
        font-size 20px
        line-height 40px
      .add
        color skyblue
        font-size 20px
        line-height 40px
      .number
        font-size 20px
        line-height 40px
  </style>
