<template>
  <div class="mall-nav">
      <a href="javascript:;"
        v-for="(item, index) in mallList"
        :key="index"
        class="mall-list"
      >
        <img :src="item.icon" alt="">
        {{item.text}}
      </a>
  </div>
</template>

<script>
export default {
  name: 'mall-nav',
  props: {
    mallList:Array
  }
}
</script>

<style lang="scss" scoped>
.mall-nav {
    @include wh(100%, auto);
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(5, 1fr);
    .mall-list{
        @include flex(column, center, center); 
        font-size: 0.28rem;
        margin-top: 0.2rem;
        img {
            @include wh(1rem, 0.8rem);
            margin-bottom: 0.1rem;
        }
    }
}
</style>
