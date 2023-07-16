<template >
<v-container class="fill-height">
        <br><br>
  <UploadAvata v-model="selectImageDialog"></UploadAvata>
  <v-row justify="center" align="center">
    <v-col cols="12" md="4" xl="3">
      <v-card>
        <v-card-title>Acount</v-card-title>
        <v-card-text>
          <div class="d-flex flex-column justify-center align-center mb-3">
            <v-avatar size="256" color="grey darken-3" v-if="!getUserImage">
              <v-icon size="240" @click="selectImageDialog = true">mdi-account</v-icon>
            </v-avatar>
            <v-avatar size="256" color="grey darken-3" v-else>
              <v-img class="hoverable" :src="getUserImage" @click="selectImageDialog = true"></v-img>
            </v-avatar>
          </div>
          <v-form ref="profileForm" @submit.prevent="doUpdate">
            <v-text-field label="User Name" outlined="outlined" dense="dense" v-model="name" :value="username"></v-text-field>
            <v-text-field label="Email" outlined="outlined" dense="dense" v-model="Useremail" :value="email"></v-text-field>
            <v-text-field label="Phone Number" v-model="Userphone" outlined="outlined" dense="dense"></v-text-field>
            <v-text-field label="Change Password" type="password" v-model="changePassword" outlined dense :rules='[$rules.password]'></v-text-field>
            <div class="text-right">
              <v-btn type="submit" color="primary">Submit</v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>
<script>
import { mapState } from 'vuex'
import UploadAvata from '~/components/UploadAvata'

export default {
  name: 'Profile',
  components: { UploadAvata },
  data: () => ({
    name: '',
    Userphone: '',
    changePassword: '',
    Useremail: '',
    selectImageDialog: false
  }),
  computed: {
    ...mapState({
      //username : state => state.user.username,
      userNiceName: state => state.user.username,
      phoneNumber: state => state.user.phone,
      userImage: state => state.user.image,
      useremail: state => state.user.email
    }),
    
    getUserImage () {
      if (this.userImage) {
        return '/user/' + this.userImage
      }
      return null
    },
    getUserEmail () {
      if (this.Useremail) {
        return '/user/' + this.Useremail
      }
      return null
    }


  },
  methods: {
    selectImage () {
    },
    doUpdate () {
      if (this.$refs.profileForm.validate()) {
        const { name,Userphone, changePassword } = this
        this.$axios.patch('/api/profile', { name, Userphone, changePassword }).then(this.$snackbar.requestSuccess).catch(this.$snackbar.requestError)
        this.$axios.delete('/api/users/session')
        this.$store.commit('user/clearUserData')
        this.$router.replace('/')
      }
    }
  },
  mounted () {
    this.name = this. userNiceName
    this.Userphone = this.phoneNumber  
    this.Useremail = this.useremail 
    
  }
}
</script>
