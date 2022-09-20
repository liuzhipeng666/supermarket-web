<template>
  <div class="classify-list">
      <ul class="content">
          <li
           v-for="(item, index) in classifyList"
            :key="index"
            >{{item.categoryName}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'classify-list',
  props: {
     classifyList:Array 
  }
}
</script>

<style lang="scss" scoped>
.classify-list{
    
    .content{
        width: 1.72rem;
        background: #f2f2f2;
        font-size: 0.3rem;
        li {
            text-align: center;
            line-height: 1.1rem;
        }
    }
}
</style>
