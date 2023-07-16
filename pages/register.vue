<template >
<v-app style="text-align: center;">
  <ArletLogin/>
    <v-container class="fill-height">
      <v-img dark>
          <img src="../static/img/logo.png" width="250" height="200" />
        </v-img>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="4">
      <v-card>
        <v-card-title>Sign in</v-card-title>
        <v-card-text>
          <v-form ref="form" @submit.prevent="submit">
            <v-text-field name="user" label="Username" prepend-icon="mdi-account-circle" v-model="username" outlined dense></v-text-field>
            <v-text-field name="phone" label="Phone" type="email" prepend-icon="mdi-phone" v-model="phone" outlined dense ></v-text-field>
            <v-text-field name="email" label="Email" type="email" prepend-icon="mdi-email" v-model="email" outlined dense></v-text-field>
            <v-text-field name="password" :type="showPassword ? 'text' : 'password'" label="Password" v-model="password" prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" outlined dense></v-text-field>
            <v-text-field name="password2" :type="showPassword ? 'text' : 'password'" label="Password" v-model="password2" prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" outlined dense></v-text-field>
            <v-divider></v-divider>
          </v-form>
        </v-card-text>
        <v-card-actions class="px-5"><span>Have An Account?</span>
          <nuxt-link class="ml-1 font-weight-bold" to="/login">Login</nuxt-link>
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

import ArletLogin from "~/components/ArletLogin.vue"
export default {
  name: "App",
  components: { ArletLogin},
  data () {
    return {
      username: '',
      phone:'',
      email: '',
      password: '',
      password2 : '',
      showPassword: false
    };
  },
  methods: {
    submit () {
      const { username, phone, email, password, password2} = this
      return this.$axios.post('/api/users/register', { username, phone, email, password,password2 }).then(res => {
        this.$snackbar.requestSuccess(res)
        this.$router.push('/login')
      }).catch(this.$snackbar.requestError)
    },
  },
};
</script>
