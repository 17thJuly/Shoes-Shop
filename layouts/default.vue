<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
	<header >
    <nav>
      
			<a href="#" class="toggle-menu">&#9776;</a>
			<ul class="nav-list nav-open" id="nav">
        <li><a href="/men/1">Home</a></li>
        <li><a href="#">About</a></li>
				<li class="has-submenu"><a href="" >Shoes</a>
					<ul>
            <li><a href="/men/1">Men</a></li>
						<li><a href="/women/1">Women</a></li>
					</ul>
				</li>
				
          <li>
          <a>
					<h2 class="site-title" >Chaussures de Luxestore</h2>
				</a></li>
        <li> <v-btn icon >
         
        </v-btn></li>
		<template v-if='!isLoggedIn'>
			<li class="has-submenu"><a href="#">Conntact us</a>
					<ul>
						<li><a href="/register"> <v-icon >mdi-account-plus</v-icon>Sign in</a></li>
						<li><a href="/login"> <v-icon>mdi-login</v-icon>Login</a></li>
					</ul>
				</li>
		</template>
		<template v-if="isLoggedIn">
			<li class="has-submenu"><a href="#"><v-list-item>
        <avataUser/>
			<v-list-item-title class="text-h6">
                {{userName}}
              </v-list-item-title>
         </v-list-item></a>
					<ul>
						<li>
							<v-list-item>
								<v-card
      class="mx-auto"
      width="256"
      tile
    >
      <v-navigation-drawer permanent>
        <v-system-bar></v-system-bar>
        <v-list>
          <v-list-item link>
            <avataUser/>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{userName}}
              </v-list-item-title>
              <v-list-item-subtitle>{{userEmail}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-card
      class="mx-auto"
      max-width="600"
    >
      <v-list>
        <v-list-item-group
          v-model="model"
          mandatory
          color="indigo"
        >
        <a href="/profile">
          <v-list-item>
            <v-list-item-icon >
              <v-icon >mdi-account-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title >Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </a>
          <v-list-item @click="doLogOut" >
            <v-list-item-icon>
              <v-icon >mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title >Log Out</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
      </v-navigation-drawer>
    </v-card>
          	</v-list-item>

						</li>
					
					</ul>
				</li> 	
		</template>  
        <li> <v-btn icon  to ="/cart">
          <v-icon>mdi-cart-variant</v-icon>
        </v-btn></li>
			</ul>
    </nav>
	</header>	
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main> 
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<script>
import { mapState } from 'vuex'
import avataUser from '~/components/avataUser.vue'
export default {
  components: { avataUser },
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
     
      miniVariant: false,
      right: true,
      rightDrawer: false,
	  selectedItem: 0,
    items: [
      { text: 'Dash Board', icon: 'mdi-account-plus', to:'/profile'},
    ],
    }
  },
  computed: {
    ...mapState({
      userData: state => state.user,
      isLoggedIn: state => !!state.user.username,
      isAdmin: state => state.user.isAdmin,
      userImage: state => state.user.image
    }),
    userName () {
      return this.userData.name || this.userData.username
    },
	userEmail(){
      return this.userData.email
    },
    isLoggedIn () {
      return this.userData && this.userData.username
    }
  },
  methods:{
    async doLogOut () {
      try {
        const { data } = await this.$axios.delete('/api/users/session')
        this.$snackbar.success(data.message)
        this.$store.commit('user/clearUserData')
        this.$router.replace('/')
      } catch(err) {
        this.$snackbar.requestError(err)
      }
    }

  }
}
</script>

,<style>
header, nav, div, img, a,ul, li, h1, h2{
	margin: 0;
	padding: 0;
	text-decoration: none;
	list-style-type: none;
}
*{box-sizing: border-box;}
a:link, a:visited{
	color:#78909C;
	font-weight: 700;
	transition: .2s color ease-in-out;
}
a:hover, a:active{
	color: #888;
}
.site-title{
	font-family: Monaco;
  color:#78909C;
  padding-left: 150px;
  padding-right: 150px;

}

/*styling the header part*/
.toggle-menu{
	display: none;
}
header{
	margin:2rem 0;
}
.site-title img{
	max-width: 100px;
	display: inline-block;
	vertical-align: middle;
	-webkit-filter: grayscale(90%);
	-moz-filter: grayscale(90%);
	filter: grayscale(90%);
}

.nav-list{
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	align-items: center;
	white-space: nowrap;
}
.nav-list > li {
	position: relative;
}

.nav-list>li:not(.has-logo)>a{
	text-transform: uppercase;
	display: block;
	padding:1rem;
}

.nav-list ul{
	position: absolute;
	z-index: 1010;
	background-color: #fff;
	line-height: 2rem;
	left: -9999px;	
}

.nav-list ul a{
	font-weight: normal;
	display: block;
	padding: .5rem 1rem;	
}

.nav-list > li:hover a + ul{
	left: 0;
	top:100%;
}



@media only screen and (max-width: 58.75rem){

	
	.has-logo{
		display: none;
	}
	
}
@media only screen and (max-width: 33.68rem){
	.toggle-menu{
		display: block;
		max-width: -webkit-min-content;
		max-width: -moz-min-content;
		max-width: min-content;
		margin: 1rem auto;
		background-color: #393939;
		text-align: center;
		color: #fff !important;
		padding: 1rem;
		border-radius: .25em;

	}
	.nav-list{
		display: block;
		width: 100%;
		position: static;
		line-height: 1rem;
		z-index: 1012;
		left: 0;
		top:0;
		background-color: #fff;
		
		max-height: 0;
		overflow: hidden;
	
	}

	.active{
		max-height: 100%;
		overflow: auto;
	}


	.nav-list  ul{
		position: static;
		text-indent: 2rem;
		z-index: 1013;
	}
}
</style>