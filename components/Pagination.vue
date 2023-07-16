<template>
   <div class="text-center">
      <el-pagination
      :current-page="page"
        :disabled="disabled"
          :page-size="60"
          :pager-count="10"
          layout="prev, pager, next"
          :small="small"
          :total="1500"
          @current-change="handleCurrentChange"
          >
        </el-pagination>
      </div>
</template>

<script>

  export default {   
      data(){
          return {
              items:[],
              page:1,
              page_total:0,
          }
      },
      created() {
        this.getPage()
    },
      methods:{
        getPage(){
        this.page = this.$route.params.slug
            return this.page
        },
        handleCurrentChange (val) {
          this.$nuxt._router.push({
            path: this.$route.path.slice(1,0) + val
          }) 
           this.page = val
}
      }
       
  }
  </script>
  