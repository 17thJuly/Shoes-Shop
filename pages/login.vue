<template>
  <v-app style="text-align: center;">
<v-container class="fill-height">
   <v-img dark>
          <img src="../static/img/logo.png" width="210" height="210" />
        </v-img>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="4">
      <v-card>
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-form ref="form" @submit.prevent="submit">
            <v-text-field name="email" label="Email" prepend-icon="mdi-email" v-model="email" @keydown.enter="submit" outlined="outlined" dense="dense"></v-text-field>
            <v-text-field name="password" :type="showPassword ? 'text' : 'password'" label="Password" v-model="password" prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" @keydown.enter="submit" outlined="outlined" dense="dense"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="px-5"><span>Don't Have An Account?</span>
          <nuxt-link class="ml-1 font-weight-bold" to="/register">Register</nuxt-link>
          <v-spacer></v-spacer>
          <v-btn color="info" type="submit" @click="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</v-container>
  </v-app>
  </template>

  <script>
export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: '',
    showPassword: false
  }),
  methods: {
    submit () {
      const {  email, password } = this
      this.$axios.post('/api/users/login', { email, password }).then(async (res) => {
        await this.$store.dispatch('checkAuth')
        this.$snackbar.requestSuccess(res)
        this.$router.push('/men/1')
      }).catch(this.$snackbar.requestError)
    },  
  }  
};
</script>
