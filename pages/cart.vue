<template>
    <div>
      <div class="breadcrumb__text">
                          <h1>Shopping Cart</h1>
                      </div>
    <section class="shopping-cart spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="shopping__cart__table">
                        <table >
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Size</th>
                                    <th>Price</th>
                                    <th></th>
                                    <th></th>
                                </tr> 
                            </thead>
                            <tbody>
                                    <tr v-for="(item,index) in Items" :key="(item,index)" >
                                    <td class="product__cart__item" >
                                        <div class="product__cart__item__pic">
                                            <img :src="item.img" height="85">
                                        </div>
                                        <div class="product__cart__item__text">
                                            <h3>{{item.title}}</h3>
                                            <h4>{{item.price}}</h4>
                                        </div>
                                    </td>
                                    <td class="quantity__item">
                                          <div class="quantity">
                                              <div class="pro-qty-2">
                                                  <el-input-number v-model="quantity[index]"  size="small" :min="1" :max="5" @change="getPrice(index)" @input="setTotal()"></el-input-number>
                                              </div>
                                          </div>
                                      </td>
                                      <td class="size__item" >
                                          <div class="selection">
                                              <v-select
                                          v-model="select[index]"
                                          class="slected-item"
                                          :items="items"
                                          item-text="size"
                                          label="Select Size Shoes"
                                          return-object
                                          single-line
                                          ></v-select>
                                          </div>
                                     </td>
                                     <v-dialog v-model="dialogDelete" max-width="500px">
                                      <v-card>
                                      <v-card-title class="text-h5 product__cart__item__text" >Are you sure want to delete shoes in cart?</v-card-title>
                                      <v-card-actions>
                                          <v-spacer></v-spacer>
                                          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                          <v-btn color="blue darken-1" text @click="deleteItems(item._id)">OK</v-btn>
                                          <v-spacer></v-spacer>
                                      </v-card-actions>
                                      </v-card>
                                  </v-dialog>
                                    <td class="cart__price" >
                                        <vue-numeric read-only currency="€" separator="," :empty-value="Price[index]" v-model="Price[index]" ></vue-numeric></td>
                                    <td><v-icon class="cart__close" small @click="deleted()">mdi-delete</v-icon></td>
                                </tr>
                            </tbody>
                            <div class="col-lg-6 col-md-6 col-sm-6"> 
                          </div>
                        </table>
                    </div>
                </div>
            </div>
        </div>                 
    </section>                      
                           <div class="col-lg-5" >
                            <a href="/checkout">
                            <v-btn
                          block
                          exact
                          class="white--text update__btn"
                          color="grey darken-4 accent-4"
                          width="30"
                          @click="doUpdate()"
                          >
                          Save Product 
                          </v-btn> 
                        </a>
                          <br><br>
                          
                     
                  </div>
                  
    </div>
  </template>
  <script>
  export default {
    async asyncData({$axios}) {
    const item = await $axios.get(`/api/cart/list`)
    return { Items:item.data.Items}    
    },
    data(){
        return{
          Items:[],
          quantity:[],
          select: [{size:''}],
          img:[],
          total:0,
          Price:[],
          items: [
          { size: 'EU40' },
          { size: 'EU41' },
          { size: 'EU42'},
          { size: 'EU43'},
          { size: 'EU44' },
          { size: 'EU45'},
        ],
        dialogDelete: false,
          
        } 
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
  },
    created() {
      this.setSize()
      this.setQuanty()
      this.setPrice()
      this.setTotal()
    },
    
    methods: {
      async list(){
          const item = await this.$axios.get(`/api/cart/list`)
              this.Items=item.data.Items;
      },
      async setSize() {
              for(let i=0;i<=this.Items.length;i++){
                  this.select[i] = {size: this.Items[i].size } 
              }
             return await this.select
              },
      async setQuanty(){
          for(let i=0;i<=this.Items.length;i++){
                  this.quantity[i] = this.Items[i].quantity 
              }
             return await this.quantity
      },
      async setPrice(){
          for(let i=0;i<=this.Items.length;i++){
                  this.Price[i] =parseInt((this.Items[i].price.substr(1)).replace(/,/g, ''), 10).toFixed(2)*(this.Items[i].quantity)
              }
             return await this.Price
      },
       setTotal(){
        this.total=0
          for(let i=0;i<this.Price.length;i++){
                this.total = this.total + this.Price[i]
              }
              console.log(this.Price)
      },
      async getImg(){
           for(let i=0;i<=this.Items.length;i++){
                   this.img[i] = this.Items[i].img
              }
              return  await this.img
          
      },
      async getPrice(index){
          this.Price[index] =parseInt((this.Items[index].price.substr(1)).replace(/,/g, ''), 10).toFixed(2)*(this.quantity[index])   
        return  await this.Price
      },
          
      doUpdate(){
         this.getImg()
          const {img,quantity,select}=this
          this.$axios.patch('/api/cart/update', { img,quantity,select}).then(this.$snackbar.requestSuccess).catch(this.$snackbar.requestError)
          this.$router.replace('/')
  
        },
        deleted(){
        this.dialogDelete = true
        },
      deleteItems(ItemId){
          console.log(ItemId)
          this.$axios.delete('/api/cart/del/'+ ItemId).then(res => {
          this.dialogDelete = false
          this.$snackbar.requestSuccess(res)
          this.list()
        
        }).catch(this.$snackbar.requestError)
      },
      closeDelete () {
        this.dialogDelete = false
      },
    
        },
  }
  </script>
  