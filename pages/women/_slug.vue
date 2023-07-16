<template>
  <v-app>
  <div class="app">
    <div class="text-center">
      <Pagination/>
    </div> 
    <div class="bg-primary p-2 m-2 flex-fill">
      <v-row  >
        <v-col 
        v-for="(item,index) in items" :key="index"
        class="mx-auto"
        md="3">
      <v-card  class="item-card">
        <v-hover v-slot="{ hover }">
        <v-img :src="item.img"> 
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out "
            style="height: 100%;"
          >
           <v-img :src="item.img2"></v-img>
          </div>
        </v-expand-transition>
      </v-img>
  </v-hover>
      <v-card-text></v-card-text>
            <span class="item-text" >{{item.brand}}</span>
          <div class="items-title">
        <h3>{{item.title}}</h3>
          </div> 
          <v-card-text> <span class="item-text" >{{item.price}}</span></v-card-text>
      <v-divider class="mx-6"></v-divider>
      <div class="pull-right">
      <v-card-actions>
        <v-btn
          block
          class="white--text"
          color="deep-orange accent-4"
          @click="addCart(index)">
          Add to Cart
        </v-btn>
      </v-card-actions>
      </div>
    </v-card>
        </v-col>
      </v-row> 
  </div>
  <Pagination/>
   
  </div> 
</v-app>
</template>

<script>
export default {
  name:'Woman',
  asyncData ({ $axios ,  params}) {
    const { slug } = params || {}
    return $axios.get(`/api/shoes/women/`+slug)
      .then((res) => {
        return { items: res.data.items }
      })
      
  },           
  
    data(){
        return {
            items:[],
            page:1,
        }
    },
    methods:{
    async addCart(index){
      const title=this.items[index].title
      const brand=this.items[index].brand
      const price = this.items[index].price
      const img = '/women/'+this.items[index].img
      await this.$axios.post('api/cart/add',{title,brand,price,img}).then(res=>{
        this.$snackbar.requestSuccess(res)
      })    
    }
  }
   
     
}
</script>

<style>
  .item-card{
    text-align:left;
    overflow-wrap: break-word;
    padding: 2px;
    margin-bottom: 1px;

  }
  .mx-auto{
    display: flex;
    flex-wrap: wrap;
  }
  .items-title,.item-text,.white--text{
    
    color:#0091EA;
      padding: 5px;
     margin-bottom: 5px;  
    }
    .items-title{
      height: 60px;
      
    }
    .item-text{
      color:#78909C;
    }
    
  


</style>




