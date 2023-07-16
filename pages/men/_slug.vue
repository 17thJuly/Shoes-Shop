<template>
    <v-app>
      <div class="icon-title"> 
        <v-list-item-icon class="bg-primary p-2 m-2 flex-fill">
             <v-list-item> <img  srcset="/img/sneaker.jpg"></v-list-item>
             <v-list-item> <img  srcset="/img/boots.jpg"></v-list-item>
             <v-list-item> <img  srcset="/img/dress-shoes.jpg"></v-list-item>
              <v-list-item> <img  srcset="/img/sloppers.jpg"></v-list-item>
            </v-list-item-icon>
          </div>
       <Pagination/>
          
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
              <NuxtLink :to="'shoes/'+item.id" no-rel>
          <h3>{{item.title}}</h3>
          </NuxtLink>
            </div>
            <v-card-text> <span class="item-text" >{{item.price}}</span></v-card-text>
           
        <v-divider class="mx-6"> 
        </v-divider>
        <div class="pull-right">
        <v-card-actions>
         <v-icon @click="addCart(index)" right>mdi-cart</v-icon>
        </v-card-actions>
        </div>
      </v-card>
          </v-col>
        </v-row> 
    </div>
    <div class="text-center">
      <Pagination/>
      
      </div>
     
  
  </v-app>
  </template>
  
  <script>
  export default {
    asyncData ({ $axios, params  }) {
        const { slug } = params || {}
      return $axios.get(`/api/shoes/men/`+ slug )
        .then((res) => {
          return { items: res.data.items }
        })
        
    },           
    
      data(){
          return {
              items:[],
              page:0,
              page_total:0,
              val:1
          }
      },
      created() {
     
    },
      methods:{
        async addCart(index){
          const title=this.items[index].title
          const brand=this.items[index].brand
          const price = this.items[index].price
          const img = '/men/'+ this.items[index].img2
          await this.$axios.post('api/cart/add',{title,brand,price,img}).then(res=>{
            this.$snackbar.requestSuccess(res)
          })    
        },
        handleCurrentChange (val) {
          this.$nuxt._router.push({
            path: `/men/`+val
          }) 
          this.page=val
          console.log(this.page)
          return this.page
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
      img{
      border: 0;
      max-width:300px;
      height: 200px;
      }
      .icon-title{
        margin-bottom: 50px;
      }
      
    
  
  
  </style>
  
  
  
  
  