<template>
    <div>

         <!-- Page Preloder -->
         <section class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__text">
                        <h4>Check Out</h4>
                        <div class="breadcrumb__links">
                            <a href="/men/1">Home</a>
                            <a href="/cart">Add Cart</a>
                            <span>Check Out</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->

    <!-- Checkout Section Begin -->
    <section class="checkout spad">
        <div class="container">
            <div class="checkout__form">
                <form action="#">
                    <div class="row">
                        <div class="col-lg-8 col-md-6">
                            
                            <h6 class="checkout__title">Billing Details</h6>
                            <div class="row">
                                <div class="col-lg-6">
                                        <p >Full Name<span>*</span></p>
                                    <v-text-field name="fullname"  v-model="fullname"  outlined="outlined" dense="dense"></v-text-field>
                                    </div>
                            </div>
                            <div class="col-lg-6">
                                        <p >Address<span>*</span></p>
                                    <v-text-field name="address"   v-model="address"  outlined="outlined" dense="dense"></v-text-field>
                                    </div>
                            <div class="checkout__input__checkbox">
                                <label for="diff-acc">
                                    Note about your order, e.g, special noe for delivery
                                    <input type="checkbox" id="diff-acc">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div class="col-lg-6">
                                        <p >Note<span>*</span></p>
                                    <v-text-field name="notes"   v-model="notes"  outlined="outlined" dense="dense"></v-text-field>
                                    </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="checkout__order">
                                <h4 class="order__title">Your order</h4>
                                <div class="checkout__order__products">Product 
                                    <span>Total</span></div>
                                <ul class="checkout__total__products" v-for="(item,index) in Items" :key="(item,index)">
                                    <li>{{ item.title }} <span> <vue-numeric read-only currency="€" separator="," :empty-value="Price[index]" v-model="Price[index]" ></vue-numeric></span></li>
                                </ul>
                                <ul class="checkout__total__all">
                                    <li>Total<vue-numeric read-only  currency="€" separator="," :empty-value="total" v-model="total" ></vue-numeric></li>
                                </ul>
                               
                                <v-btn  @click="saveBill()">PLACE ORDER</v-btn>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
   
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
            Price:[],
            fullname:'',
            address:'',
            notes:'',
            total:0
        }
    },
    created() {
      this.setPrice()
      this.setTotal()
    },
    methods:{
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
      async saveBill(){
       const {fullname,address,notes,total}=this
        await this.$axios.post('api/bill/add',{fullname,address,notes,total}).then(res=>{
            this.$snackbar.requestSuccess(res)
            this.$router.push('/men/1')
          })    
            
      }
    }
}
</script>