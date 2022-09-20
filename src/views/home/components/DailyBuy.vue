<template>
  <div class="daily-buy">
      <a href="javascript:;" class="title">每日必购 <span>大家都在买</span></a>
      <img src="@/assets/images/首页1_02.jpg" alt="" class="pic">
  </div>
</template>

<script>
export default {
  name: 'daily-buy'
}
</script>

<style lang="scss" scoped>
.daily-buy{
    width: 100%;
    .title{
        padding-left: 0.2rem;
        box-sizing: border-box;
        color: #000;
        font-size: 0.4rem;
        font-weight: bold;
        span{
           color: #000;
            font-size: 0.25rem; 
            font-weight:400;
        }
    }
    .pic{
        @include wh(100%, auto);
        margin-top: 0.2rem;
    }
}
</style>
