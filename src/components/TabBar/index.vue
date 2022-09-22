<template>
  <div class="tab-bar" :class="{
    [layout]: true
  }">
      <nav class="hot-list">
        <a href="javascript:;"
        v-for="(item, index) in tabs"
        :key="index"
        :class="{active: activeIndex === index}"
        @click="(change(index))"
        >{{item[tabName]}}</a>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'tab-bar',
  props: {
     tabs: Array,
     tabName: {
       type: String,
       default: 'text'
     },
     layout: {
      type: String,
      default: 'row'
     }
  },
  watch: {
    tabs () {
      this.activeIndex = 0
    }
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
    overflow:auto;
    .hot-list{
      @include wh(auto, 100%);
      @include flex(row, center, space-between);
      a{
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
   &.column {
     @include wh(1.72rem, 100%);
      .hot-list{
       @include wh(100%, auto);
       @include flex(column);
     }
   } 
}
</style>
