<template>
  <div class="product-list">
      <dl class="product-item"
        v-for="(item, index) in productLost"
        :key="index"
      >
        <dt><img :src="item.img" alt=""></dt>
        <dd>
          <header>
            <h2>{{item.name}}</h2>
            <p>累计{{(123465/10000).toFixed(1)}}万份 / 已拼{{(123465/10000).toFixed(1)}}万份</p>
            <tags :list="['自营', '团购']" class="tags"/>
          </header>
          <footer>
            <p>
              <span class="price">￥<b>{{item.price | formatPrice}}</b></span>
              <span>￥<b>{{item.price | formatPrice }}</b></span>
            </p>
            <i class="iconfont icon-pinglun pinglun"></i>
          </footer>
        </dd>
      </dl>
  </div>
</template>

<script>
export default {
  name: 'product-list',
  props: {
    productLost: Array
  },
  filters: {
    formatPrice (price) {
      return price / 100
    }
  }
}
</script>

<style lang="scss" scoped>
.product-list{
  .product-item{
    @include flex(row);
    @include border-1px(bottom, $color-border-line);
    padding: 30px;
    font-size: 0.28rem;
    background: #fff;
    dt {
      @include wh(120px, 120px);
      img {
        @include wh(120px, 120px);
      }
    }
    dd {
      @include flex(column, center, space-between);
      flex: 1;
      height: 120px;
      margin-left: 0.1rem;
      header{
        font-size: 0.28rem;
        h2 {
          @include ellipsis(2);
          line-height: 1.5;
        }
        p {
          font-size: 0.20rem;
          color: $color-grey;
          margin-top: 0.1rem;
        }
        .tags{
          margin-top: 0.1rem;
          font-size: 0.2rem;
        }
      }
      footer{
        width: 100%;
        @include flex(row, center, space-between);
        p{
          span{
            color: $color-grey;
            font-size: 0.18rem;
            text-decoration: line-through;
          }
          .price{
              color: #FE3113 ;
              font-size: 0.30rem;
              text-decoration: none;
              b{
                font-size: 0.36rem;
              }
          }
        }
        .pinglun{
           @include wh(30px, 30px);
           line-height: 30px;
           text-align: center;
          background: $color-warning;
          color: #fff;
          border-radius: 100%;
        }
      }
    }
  }
}
</style>
