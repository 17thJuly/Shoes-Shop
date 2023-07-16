<template>
    <div>
        <template v-if="!getUserImage">
          <v-list-item-avatar>
            <v-icon>  mdi-account-circle</v-icon>
            </v-list-item-avatar>
        </template>
        <template v-else>
          <v-list-item-avatar>          
              <v-avatar size="50">
              <v-img :src="getUserImage" v-if="userImage"></v-img>
             </v-avatar>
              </v-list-item-avatar>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
    return {
    }
  },
  computed: {
    ...mapState({
      userData: state => state.user,
      isLoggedIn: state => !!state.user.username,
      isAdmin: state => state.user.isAdmin,
      userImage: state => state.user.image
    }),
    getUserImage () {
      if (this.userImage) {
        return '/user/' + this.userImage
      }
      return null
    },
  },
}
</script>