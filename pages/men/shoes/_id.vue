<template>
    <div>
        <section class="shop-details">
            <section class="product">
               
 <div class="product__photo">
 <div class="photo-container">
 <div class="photo-main">
 
 <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice">
 </div>
 <div class="photo-album">
 <ul>
 <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"></li>
 <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple"></li>
 <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple"></li>
 <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top"></li>
 </ul>
 </div>
 </div>
 </div>
 <div class="product__info">
 <div class="title">
 <h1>Delicious Apples</h1>
 <span>COD: 45999</span>
 </div>
 <div class="price">
 R$ <span>7.93</span>
 </div>
 <div class="variant">
 <h3>SELECT A COLOR</h3>
 <ul>
 <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"></li>
 <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple"></li>
 <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple"></li>
 <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple"></li>
 </ul>
 </div>
 <div class="description">
 <h3>BENEFITS</h3>
 <ul>
 <li>Apples are nutricious</li>
 <li>Apples may be good for weight loss</li>
 <li>Apples may be good for bone health</li>
 <li>They're linked to a lowest risk of diabetes</li>
 </ul>
 </div>
 <button class="buy--btn">ADD TO CART</button>
 </div>
</section>
 
        <div class="product__details__content">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    
                    <div class="col-lg-8">
                        <div class="product__details__text">
                          <span class="item-text" ></span>
                                <div class="items-title">
                              <h3>{{shoes.title}}</h3 >
                                </div>
                            <h3></h3>
                            <span>{{ shoes.detail }}</span>
                           
                            <div class="product__details__option">
                                   <v-select
                                          v-model="select"
                                          class="slected-item"
                                          :items="items"
                                          item-text="size"
                                          label="Select Size Shoes"
                                          return-object
                                          single-line
                                          >
                                          ></v-select>     
                                </div>
                            <div class="product__details__cart__option">
                                <a href="#" class="primary-btn">add to cart</a>
                            </div>
                            <div class="product__details__btns__option">
                                <a href="#"><i class="fa fa-heart"></i> add to wishlist</a>
                                <a href="#"><i class="fa fa-exchange"></i> Add To Compare</a>
                            </div>
                            <div class="product__details__last__option">
                                <img src="/img/shop-details/details-payment.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="product__details__tab">
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#tabs-7" role="tab">Additional
                                    information</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane active" id="tabs-5" role="tabpanel">
                                    <div class="tab-content">
                                <div class="tab-pane active" id="tabs-5" role="tabpanel">
                                    <div class="product__details__tab__content">
                                        <p>You can help offset the CO2 emissions of packaging, delivery, and potential returns from your order with a contribution to Climate Partner. They are our chosen independent partner and recognized expert in climate protection. The contribution is in addition to Mytheresa’s commitment to operate carbon neutrally. You can find more 
information about Climate Partner and the project you support here.</p>
<p>With a contribution of €0,40, you are helping a Gold Standard-certified project whose work offsets the environmental impact of your order. The CO2 emissions of each 
order are estimated at an average of 50kg, which can be compared with the yearly carbon uptake of 4 beech trees. Together we can actively contribute to achieving the UN's Sustainable Development Goals (SDGs). Simply order as you always have, and, when choosing your preferred delivery method, you can select the climate neutral option to help offset your CO2 emissions. Please note that your climate neutral contribution helped offset the CO2 emissions of your order (packaging, shipment, and returns). In the case of returns, it is non-refundable. Further information can be found in our Terms and Conditions.Your purchase will be shipped in environmentally friendly packaging, or you can opt for our signature yellow packaging at no additional cost.Worldwide deliveries are managed by our affiliate courier DHL. All shipments sent by Mytheresa are insured against theft and accidental damage. This insurance coverage ceases once the shipment and a written acknowledgement of receipt have 
been received.Please be aware that we cannot deliver to post office boxes. In the case of partial shipments, shipping costs will be charged only once.We process and 
send orders during our main service hours, 8:00 am until 8:00 pm CET, from Monday to Friday, and from 9:00 am until 6:00 pm CET on Saturdays. Please note that we are closed on German public holidays. Your order will be ready for dispatch one business day after the receipt of payment, at the latest.Shipping for worldwide orders over €800 is free of charge.Please refer to the chart below for shipping methods, shipping costs, and delivery times for your destination:If the delivery times for your order differ from those shown above, we will inform you at checkout.Please also be aware that shipping times can vary depending on customs clearance. We deliver to over 130 countries all over the world. If you are looking for information on shipping options and shipping costs for a country that is not shown, please select your destination country here.As soon as we have shipped your order, you will receive an email with the tracking number for your parcel. You can check the status of your shipment one to two hours after receiving the email by using the link provided.Shipped with DHL:Check status of parcelPlease find further information about duties 
and taxes for worldwide deliveries here.Thank you for shopping with Mytheresa. We hope that you are pleased with your order. If for any reason you are not fully satisfied, you can return any purchases (including reduced items) within 30 days of receipt.For returns, please follow the instructions for returning your order with the same carrier that shipped it. For exchanges, please see the information at the bottom.• All items must be returned in their original condition, without having been 
worn, washed or altered, and with tags still attached. Please make sure to include all item boxes and dust bags with your return.• Only one prepaid label is provided for each order, therefore all goods must be returned in the same parcel.• Return shipments must be made using the same service as for the original delivery (DHL or 
UPS).• We can only accept returns from the country to which an order was originally shipped, for example, orders delivered to Germany must be returned from Germany. 
Otherwise,  the return is unfortunately not free of charge (import and shipping fees will be charged at your own expense).• Customised items cannot be returned. • Your refund will be credited to the original payment method. Shipping costs will not be refunded by Mytheresa in case of returns.• When returning items that arrived in separate parcels, please carefully pack them into their original packaging. Kindly use the individual labels for each parcel.• We can only exchange non-faulty items that are in their original condition, have not been worn, altered or washed, and have all tags still attached. Please make sure to include all item boxes and dust bags with your return.• It is only possible to exchange the same item for a different size. We cannot exchange items for a different colour or a different item altogether.• Please be aware that we can only exchange the same item for a different size once.• Merchandise must be returned in one parcel – we reserve the right to refuse multiple returns from one order sent at different times.• Exchange shipments must be made using the same service as for the original delivery (DHL or UPS).• We can only accept exchanges from the country to which an order was originally shipped, for example, orders delivered to Germany must be returned from Germany. Otherwise, 
the exchange is unfortunately not free of charge (import and shipping fees will be charged at your own expense).• Customized items cannot be returned.• Products from the LIFE category cannot be exchanged.If you would like to repeal your contract of purchase, you may choose one of the following two options:</p>
<p>1. REPEAL OF PURCHASE BY WAY OF RETURN
Your repeal of purchase will automatically take effect if you return the items within 30 days as indicated above.</p>
<p>2. REPEAL OF PURCHASE IN WRITTEN FORM OR OVER THE PHONE
You have 14 days after delivery to repeal your contract of purchase in written form by sending us an email, fax or letter, or over the phone. Once you informed us, please return the items within 14 days.</p>
                                       
                                    </div>
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
   
</template>
<style>
* {
  box-sizing: border-box;
}
 
html,
body {
  height: 100%;
}
 
body {
  display: grid;
  grid-template-rows: 1fr;
  font-family: "Raleway", sans-serif;
  background-color: #01e37f;
}
 
h3 {
  font-size: 0.7em;
  letter-spacing: 1.2px;
  color: #a6a6a6;
}
 
img {
  max-width: 100%;
  filter: drop-shadow(1px 1px 3px #a6a6a6);
}
 
/* ----- Product Section ----- */
.product {
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  margin: auto;
  padding: 2.5em 0;
  min-width: 600px;
  background-color: white;
  border-radius: 5px;
}
 
/* ----- Photo Section ----- */
.product__photo {
  position: relative;
 
}
 
.photo-container {
  position: absolute;
  left: -2.5em;
  display: grid;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
}
 
.photo-main {
  border-radius: 6px 6px 0 0;
  background-color: #9be010;
  background: radial-gradient(#e5f89e, #96e001);
}
.photo-main .controls {
  display: flex;
  justify-content: space-between;
  padding: 0.8em;
  color: #fff;
}
.photo-main .controls i {
  cursor: pointer;
}
.photo-main img {
  position: absolute;
  left: -3.5em;
  top: 2em;
  max-width: 110%;
  filter: saturate(150%) contrast(120%) hue-rotate(10deg) drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
}
 
.photo-album {
  padding: 0.7em 1em;
  border-radius: 0 0 6px 6px;
  background-color: #fff;
}
.photo-album ul {
  display: flex;
  justify-content: space-around;
}
.photo-album li {
  float: left;
  width: 55px;
  height: 55px;
  padding: 7px;
  border: 1px solid #a6a6a6;
  list-style: none;
 
  border-radius: 3px;
}
 
/* ----- Informations Section ----- */
.product__info {
  padding: 0.8em 0;
}
 
.title h1 {
  margin-bottom: 0.1em;
  color: #4c4c4c;
  font-size: 1.5em;
  font-weight: 900;
}
.title span {
  font-size: 0.7em;
  color: #a6a6a6;
}
 
.price {
  margin: 1.5em 0;
  color: #ff3f40;
  font-size: 1.2em;
}
.price span {
  padding-left: 0.15em;
  font-size: 2.9em;
}
 
.variant {
  overflow: auto;
}
.variant h3 {
  margin-bottom: 1.1em;
}
.variant li {
  float: left;
  width: 35px;
  height: 35px;
  padding: 3px;
  margin-left: -30px;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
}
.variant li:first-child, .variant li:hover {
  list-style: none;
  border: 1px solid #a6a6a6;
}
.variant li:not(:first-child) {
  margin-left: 0.1em;
}
 
.description {
  clear: left;
  margin: 2em 0;
}
.description h3 {
  margin-bottom: 1em;
}
.description ul {
  font-size: 0.8em;
  list-style: disc;
  margin-left: -10px;
}
.description li {
  text-indent: -0.6em;
  margin-bottom: 0.5em;
}
 
.buy--btn {
  padding: 1.5em 3.1em;
  border: none;
  border-radius: 7px;
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: #fff;
  background-color: #ff3f40;
  box-shadow: 2px 2px 25px -7px #4c4c4c;
  cursor: pointer;
}
.buy--btn:active {
  transform: scale(0.97);
}
.share{
  padding:20px;
  background-color: red;
 
 
 
}
</style>
<script>
export default {
  asyncData ({ $axios, params  }) {
      const { id } = params || {}
    return $axios.get(`/api/detail/men/`+ id )
      .then((res) => {
        return { shoes: res.data.shoes }
      })
      
  },           
  
    data(){
        return {
            shoes: {},
            page:0,
            page_total:0,
            val:1,
            quantity:0,
            select: {size:''},
          items: [
          { size: 'EU40' },
          { size: 'EU41' },
          { size: 'EU42'},
          { size: 'EU43'},
          { size: 'EU44' },
          { size: 'EU45'},
        ],
     
        }
    },
    created() {
    console.log(this.shoes.detail.split(' ').join(''))
   
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