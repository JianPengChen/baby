<template>
  <div>
    <div class="wrapper-img bounceIn animated">
      <span class="iconfont logo">&#xe616;</span>
      <div class="welcome"><p>欢迎使用</p></div>
    </div>
    <div class="sign">
      <input type="text" class="text" placeholder="请输入账号" v-model="yanzheng.account">
    </div>
    <div class="password">
      <input type="password" class="text" placeholder="请输入密码" v-model="yanzheng.password">
    </div>
    <button class="in" @click="Ver">sign in</button>

  </div>
</template>
<script>
export default {
  name: 'LoginIn',
  data () {
    return {
      yanzheng: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    Ver () {
      this.$emit('ByInyanzheng', this.yanzheng)
    }
  },
  mounted () {

  }

}
</script>
<style lang="stylus" scoped>
   input,button{border:none;outline:medium;}
  .wrapper-img
    position absolute
    left 38%
    top 30%
    .logo
      font-size 40px
      display block
      text-align center
    .welcome
      padding 20px 0
  .sign
    position absolute
    top 50%
    left 24%
    .text
      height 40px
      border-radius 30px
      text-align center
      font-size 16px
  .password
    position absolute
    top 60%
    left 24%
    .text
      height 40px
      border-radius 30px
      text-align center
      font-size 16px
  .in
    height 40px
    border-radius 30px
    width 90px
    background-color skyblue
    color #ffffff
    position absolute
    top 71%
    left 37%
    font-size 16px
</style>
