<template>
  <div class="classify">
      <a href="javascript:;" class="soso">
        <i class="iconfont icon-sousuo"></i>
         搜索校园超市商品
      </a>
      <main class="main">
        <tab-bar
          ref="tabber"
          tab-name="categoryName"
          layout="column"
          @change="LeftChange"
          :tabs="LeftMenu"
          class="Left-menu"
          />
          <div class="right-list">
            <tab-bar
              tab-name="categoryName"
              @change="LeftChange"
              :tabs="RightMenu"
              class="right-menu"
            />
             <product-list :productLost="productLost" class="product-list"></product-list>
          </div>
      </main>
  </div>
</template>

<script>
export default {
  name: 'classify',
  // components: {
  //   ClassifyList,
  // },
  data () {
    return {
      LeftMenu: [],
      RightMenu: [],
      productLost: []
    }
  },
  created () {
    this.fetchcategory(),
    this.ininHomeData()
  },
  methods: {
    async fetchcategory() {
      const res = await this.$api.product.category();
      this.LeftMenu = res.data.data
      this.RightMenu = [{
        categoryId: res.data.data[0].categoryId,
        categoryName: '全部'
      }].concat(res.data.data[0].children)
      console.log(this.RightMenu);
    },
    LeftChange (index, item) {
      this.RightMenu = [{
        categoryId: item.categoryId,
        categoryName: '全部'
      }].concat(item.children)
    },
    ininHomeData () {
      this.$api.home.base().then( res => {
        this.productLost = res.data.data.product.slice(0, 10)
        })
    },
  }
}   
</script>

<style lang="scss" scoped>
.classify {
  @include wh(100vw, 100vh);
  @include flex(column);
  overflow: hidden;
  background: #fff;
  .soso {
    // @include flex(row, center, space-between);
    @include wh(auto, 0.64rem);
    background: #f2f2f2;
    margin: 0.17rem 0.26rem;
    font-size: 0.24rem;
    color: $color-link-base ;
    border-radius: 0.26rem;
    padding: 0 0.3rem;
    line-height: 0.65rem;
  }
  .main {
    @include flex(row);
    flex: 1;
    padding-bottom: 54px ;
    overflow: hidden;
    .Left-menu {
      background: #fafafa;
      flex-shrink: 0;
      &::-webkit-scrollbar {
          width: 0;
        }
      ::v-deep .hot-list{
        font-size: 0.28rem;
        display: block;
        padding: 0;
        a{
          width: 100%;
          color: #999;
          font-size: 0.28rem;
          display: block;
          padding: 0;
          &.active {
            background: #fff;
            color: $color-dark;
          }
        }
      }
    }
    .right-list {
      @include flex(column);
      overflow: hidden;
        .right-menu {
        // @include wh(5rem, 0.54rem);
        width: 5rem;
        border-bottom: 1px solid #f2f2f2;
        margin-left: 0.1rem;
        background: #fff;
        flex-shrink: 0;
        line-height: 0.5rem;
        &::-webkit-scrollbar {
          width: 0;
        }
        ::v-deep .hot-list{
          font-size: 0.24rem;
          a{
            color: #999;
            font-size: 0.24rem;
            &.active {
              background: #fff;
              color: $color-dark;
            }
          }
        }
      }
      .product-list {
        overflow: auto;
        &::-webkit-scrollbar {
          width: 0;
        }
        ::v-deep .product-item{
          padding: 20px;
          font-size: 0.24rem;
          dt{
            @include wh(100px, 100px);
            img{
              @include wh(100px, 100px);
            }
          }
          dd {
            height: 100px;
            header{
              width: 100%;
              font-size: 0.26rem;
              h2 {
                @include ellipsis(1);
              }
            }
          }
        }
      }
    }
        
  }
}
</style>
