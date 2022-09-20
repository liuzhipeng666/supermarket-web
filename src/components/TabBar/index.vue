<template>
  <div class="tab-bar">
      <a href="javascript:;"
        v-for="(item, index) in hotList"
        :key="index"
        :class="{active: activeIndex === index}"
        class="hot-list"
        @click="(change(index))"
      >{{item.text}}</a>
  </div>
</template>

<script>
export default {
  name: 'tab-bar',
  props: {
     hotList:Array 
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    change (index) {
      this.activeIndex = index
      this.$emit('change', index, this.tabs[index])
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-bar{
    @include wh(100%, 0.92rem);
    @include flex(row, center, space-between);
    overflow:auto;
   .hot-list{
       @include wh(auto, 0.92rem);
       padding:0 0.2rem;
       line-height: 0.92rem;
       text-align: center;
       color:$color-grey;
       font-size: 0.28rem;
       flex-shrink: 0;
       &.active{
           color:$color-warning;
           font-size: 0.32rem;
           font-weight: bold;
       }
   } 
}
</style>
