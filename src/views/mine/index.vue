<template>
  <div class="mine">
      <header class="header">
        <div class="nick">
          <h2>我的昵称</h2>
          <p>开启美好的一天</p>
        </div>
        <img src="@/assets/images/首页1@2x(1).png" alt="">
      </header>
      <main class="main">
        <div class="my-main">
            <div class="my-order">
            <a href="javascript:;">我的订单</a>
            <span>查看全部<i class="iconfont icon-quanbupinglunchakangengduo"></i></span>
          </div>
          <div class="state">
            <a href="javascript:;">
              <img src="@/assets/images/图标@2x(2).png" alt="">
              待付款
            </a>
            <a href="javascript:;">
              <img src="@/assets/images/图标@2x(4).png" alt="">
              待配送
            </a>
            <a href="javascript:;">
              <img src="@/assets/images/图标@2x(5).png" alt="">
              已发货
            </a>
            <a href="javascript:;">
              <img src="@/assets/images/图标@2x(6).png" alt="">
              退款/售后
            </a>
          </div>
        </div>
      </main>
      <ul class="other">
        <li>
          <a href="javascript:;">
            <img src="@/assets/images/图标@2x(6).png" alt="">
            <span>我的优惠卷</span>
          </a>
          <p>8张未使用</p>
        </li>
        <li>
          <a href="javascript:;">
            <img src="@/assets/images/图标@2x(6).png" alt="">
            <span>资质规则</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="@/assets/images/图标@2x(6).png" alt="">
            <span>练习客服</span>
          </a>
          <p>400-123-123</p>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'tab-main'
}
</script>

<style lang="scss" scoped>
.mine{
  @include wh(100vw, 100vh);
  background: #f2f2f2;
  position: relative;
  .header {
    @include wh(100%, 3rem);
    @include flex(row, center, space-between);
    padding: 0 0.3rem;
    box-sizing: border-box;
    background: red;
    .nick{
      color: #fff;
      h2 {
        font-size: 0.4rem;
      }
      p {
        font-size: 0.28rem;
        margin-top: 0.2rem;
      }
    }
  }
  .main {
    @include wh(100%, 3rem);
    .my-main{
    @include wh(7rem, auto);
    background: #fff;
    border: 1px solid #f1f1f1;
    border-radius: 0.2rem;
    padding: 0.3rem;
    box-sizing: border-box;
    position: absolute;
    top: 2.5rem;
    left: 00.25rem;
    .my-order{
      @include flex(row, center, space-between);
      line-height: 0.35rem;
      a {
        font-size: 0.28rem;
        color: #333;
      }
      span {
        font-size: 0.2rem;
        i {
          font-size: 0.2rem;
        }
      }
    }
    .state{
      @include flex(row, center, space-around);
      margin-top: 0.8rem;
      font-size: 0.28rem;
      color: #333;
      a {
        color: #333;
        img{
          @include wh(1rem, 0.8rem);
        }
      }
    }
  }
  }
  .other {
    @include wh(7rem, auto);
    margin: 0 auto;
    border-radius: 0.1rem;
    background: #fff;
    padding: 0.3rem;
    box-sizing: border-box;
    li {
      @include flex(row, center, space-between);
      margin-top: 0.4rem;
      &:first-child {
        margin-top: 0;
      }
      a {
        @include flex(row, center);
        font-size: 0.28rem;
        color: #111;
        img {
          @include wh(0.74rem, 0.64rem);
        }
      }
      p {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
