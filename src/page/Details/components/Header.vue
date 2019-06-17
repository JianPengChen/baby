<template>
    <div class="wrapper">
      <div class="header">
        <router-link to="/home"><div class="header-func"><span class="iconfont func">&#xe6b1;</span></div></router-link>
        <div class="header-text"><p>婴儿保育箱</p></div>
        <div class="header-lock"><span class="iconfont func">&#xe60a;</span></div>
      </div>
      <div class="text-line">Baby Care Box</div>
    </div>
</template>
<script>
export default {
  name: 'DetailsHeader',
  methods: {

  }
}
</script>
<style lang="stylus">
input,button{border:none;outline:medium;}
.wrapper{
  overflow hidden
  width 100%
}
.header{
  width: 92%;
  margin: 0 auto;
  height: 70px;
  position relative
}
.header-func{
  width: 33%;
  float: left;
  padding-top: 30px;
  border-bottom: 1px
  color #000000
}
.header-func .func{
  font-size: 20px
  padding-left 10px
}
.header-text{
  width: 33%;
  float: left;
  padding-top: 30px;
  font-weight: bold;
  text-align: center
}
.header-lock{
  height: 40px;
  width: 33%;
  background-color: #ffffff;
  position: absolute;
  top: 20px;
  right: -60px;
  border-radius: 20px;
}
.header-lock .func{
  font-size: 26px;
  display: block;
  padding-left: 20px;
  padding-top: 7px;

}
.text-line::before{
  content ''
  height 1px
  background-color #BFBBBD
  width 32%
  position absolute
  top 78px
  left 20px
}
.text-line::after{
  content ''
  height 1px
  background-color #BFBBBD
  width 30%
  position absolute
  top 78px
  right 25px
}
.text-line{
  text-align center
  font-size 13px
  color #BFBBBD
  font-weight bold
}

</style>
