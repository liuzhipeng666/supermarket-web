<template>
   <div>
       <swiper :options="swiperOption" class="banner">
            <!-- slides -->
            <swiper-slide class="item" v-for="(item, index) in banners" :key="index">
                <img :src="item.image" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
   </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    banners: Array
  },
  data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
  }
}
</script>

<style lang="scss" scoped>
.banner{
    width: 100%;
    height: 140px;
    .item{
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
    }
}
</style>
