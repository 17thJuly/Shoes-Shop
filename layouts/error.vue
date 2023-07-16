<template >
  <v-container class="fill-height" >
     <v-img  style="text-align: center;"> 
          <img src="~/static/img/logo.png" width="210" height="210" />
        </v-img>
  <v-row justify="center">
    <v-icon class="mr-3" x-large="x-large" color="red">mdi-block-helper</v-icon>
    <div>
      <h1>{{ error.message }}</h1>
      <div class="d-flex">
        <div class="text-subtitle-2">Please return to</div>
        <nuxt-link class="text-subtitle-2 ml-1" to="/">Home page</nuxt-link>
      </div>
    </div>
  </v-row>
</v-container>

</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>