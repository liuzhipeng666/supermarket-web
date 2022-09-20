<template>
   <div class="header-bar">
       <a href="javascript">
           <i class="iconfont icon-weizhi"></i>
           送至：北京八维研修学院
       </a>
       <i class="iconfont icon-sousuo active"></i>
   </div>
</template>

<script>
export default {
  name: 'header-bar',
}

</script>

<style lang="scss" scoped>
.header-bar{
    @include wh(100%, 49px);
    @include flex(row, center, space-between);
    padding: 0 10px;
    box-sizing: border-box;
    a {
        color:$color-grey;
        font-size: 14px;
    }
    .active{
        color:$color-grey;
    }
}
</style>
