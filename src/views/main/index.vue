<template>
  <div>
    <nav class="footer-nav">
      <router-link
        v-for="(item, index) in tabs"
        :key="index"
        :to="item.path"
        active-class="active"
      >
        <img :src="item.icon" class="icon" alt="" />
        <img :src="item.select_icon" class="select-icon" alt="" />
        <span>{{item.text}}</span>
      </router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'tab-main',
  data () {
    return {
      tabs: [
        {
          path: '/home',
          text: '首页',
          icon: require('@/assets/images/home.png'),
          select_icon: require('@/assets/images/select-home.png')
        },
        {
          path: '/classify',
          text: '分类',
          icon: require('@/assets/images/classify.png'),
          select_icon: require('@/assets/images/select-classify.png')
        },
        {
          path: '/car',
          text: '购物车',
          icon: require('@/assets/images/car.png'),
          select_icon: require('@/assets/images/select-car.png')
        },
        {
          path: '/mine',
          text: '我的',
          icon: require('@/assets/images/mine.png'),
          select_icon: require('@/assets/images/select-mine.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-nav{
  @include flex(row, center, center);
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: #fff;
  a {
    @include flex(column, center, center);
    flex: 1;
    font-size: 14px;
    padding: 5px 0;
    .icon{
      @include wh(25px, 25px)
    }
    .select-icon{
      display: none;
    }
    span{
      margin-top: 5px;
    }
    &.active{
      color: $color-warning;
      .icon{
      @include wh(25px, 25px);
      display: none;
    }
    .select-icon{
      display: block;
      @include wh(25px, 25px);
    }
    }
  }
}
</style>
