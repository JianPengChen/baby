<template>
  <div>
    <details-header></details-header>
    <details-watch :list1="list" ></details-watch>
    <details-control :list2="list" ></details-control>
    <details-xinxi :list3="list" ></details-xinxi>
  </div>
</template>
<script>
import DetailsHeader from './components/Header'
import DetailsWatch from './components/Watch'
import DetailsControl from './components/Control'
import DetailsXinxi from './components/Xinxi'
export default {
  name: 'Details',
  components: {
    DetailsHeader,
    DetailsWatch,
    DetailsControl,
    DetailsXinxi
  },
  data () {
    return {
      list: [],
      switch: Boolean,
      isshow: ''
    }
  },
  methods: {
    getdatainInfon () {
      this.$http.get('/incubator/getActivedIncubators').then(res => {
        this.list = res.data.data.list
        console.log(this.list)
      })
    }
  },
  mounted () {
    this.getdatainInfon()
  }

}
</script>
