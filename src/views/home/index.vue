<template>
  <div class="home">
    <header-bar></header-bar>
    <banner :banners="banners" />
    <mall-nav :mallList="mallList"></mall-nav>
    <daily-buy></daily-buy>
    <tab-bar :hotList="hotList" @change="navchange"/>
    <product-list :productLost="productLost"></product-list>
  </div>
</template>

<script>
import Banner from './components/Banner'
import HeaderBar from './components/HeaderBar'
import MallNav from './components/MallNav'
import DailyBuy from './components/DailyBuy'

export default {
  name: 'home',
   components: {
    Banner,
    HeaderBar,
    MallNav,
    DailyBuy
  },
  data () {
    return {
      banners: [],
      mallList: [],
      hotList: [],
      productLost: []
    }
  },
  created () {
    this.ininHomeData()
    // this.fetchProductList()
  },
  mounted () {
    window.addEventListener('scroll', this.scroll, false)
  },
  methods: {
    scroll () {
      const windowHeight = window.innerHeight
      const pageHeightt = document.body.clientHeight
      const scrollTop = document.querySelector('html').scrollTop
      console.log(windowHeight, pageHeightt, scrollTop);
      if(pageHeightt - scrollTop < windowHeight + 10) {
        console.log('yidao');
      }
    },
    ininHomeData () {
      this.$api.home.base().then( res => {
        this.banners = res.data.data.banner
        this.mallList = res.data.data.mall_nav
        this.hotList = res.data.data.hot_nav
        this.productLost = res.data.data.product.slice(0, 10)
        })
    },
    // async fetchProductList () {
    //   const res = await this.$api.product.list({
    //     page: 1,
    //     page_szie: 10
    //   })
    //   this.productLost = res.data.data
    //   console.log(res.data.data);
    // },
    navchange (index, item) {
      index,
      item
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
