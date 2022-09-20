<template>
  <div>
      <input-bar></input-bar>
      <div class="classify">
        <classify-list :classifyList='classifyList'></classify-list>
        <classify-cont :newclassifyList='newclassifyList'></classify-cont>
      </div>
      
  </div>
</template>

<script>
import InputBar from './components/InputBar'
import ClassifyList from './components/ClassifyList'
export default {
  name: 'classify',
  components: {
    InputBar,
    ClassifyList,
  },
  data () {
    return {
      classifyList: [],
      newclassifyList: []
    }
  },
  created () {
    this.ininClassifyData()
  },
  methods: {
    ininClassifyData () {
      this.$api.home.base().then( res => {
         this.newclassifyList = res.data.data.category
        console.log(res);
        const newobj = {};
        this.newclassifyList.forEach(item => {
          newobj[item.categoryId] = item
        })
        this.newclassifyList.forEach(item => {
          if(item.parentId === 0) {
            this.classifyList.push(item)
          } else {
            const parent = newobj[item.parentId];
            if(parent.children) {
              parent.children.push(item);
            } else {
              parent.children = [item];
            }
          }
        })
        return this.classifyList
      })
      
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
