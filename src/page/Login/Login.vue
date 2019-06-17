<template>
  <div>
    <login-header></login-header>
    <login-in @ByInyanzheng="listen"></login-in>
  </div>
</template>
<script>
import LoginHeader from './components/Header'
import LoginIn from './components/in'
// import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      dataIn: Object,
      list: []
    }
  },
  components: {
    LoginHeader,
    LoginIn
  },
  methods: {
    listen (ByInyanzheng) {
      this.dataIn = ByInyanzheng
      console.log(this.dataIn.account)
      this.getLoginInfo()
    },
    getLoginInfo () {
      this.$http.get('../../../static/mock/index.json')
      // this.$http.get('/incubator/active/1').then(this.getLoginInfoSuccess)
      // axios.get('/api/incubator/getActivedIncubators')
        .then(this.getLoginInfoSuccess)
    },
    getLoginInfoSuccess (res) {
      res = res.data
      if (res.ret && res.yanzheng) {
        console.log(res.yanzheng)

        if (this.dataIn.account === res.yanzheng[0].account && this.dataIn.password === res.yanzheng[0].password) {
          this.$router.push({path: '/home'})
        }
      }
    }

  },
  mounted () {

  }
}
</script>
