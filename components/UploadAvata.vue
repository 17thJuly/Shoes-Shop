<template >
<v-dialog :value="value" @input="onClose" max-width="480">
  <v-card>
    <v-card-title>Update Image</v-card-title>
    <v-card-text>
      <template v-if="file">
        <VueCroppie ref="croppie" :enableResize="false" :viewport="{ width: 250, height: 250, type: &quot;circle&quot; }" :boundary="{ width: 250, height: 250}" @result="onFinishCropping"></VueCroppie>
        <v-row>
          <v-col cols="12" md="6">
            <v-btn @click="onClose" color="error" block="block">Cancel</v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <v-btn @click="onFinishCropping" color="success" block="block">OK</v-btn>
          </v-col>
        </v-row>
      </template>
      <template v-else>
        <v-file-input label="File" @change="onFileSelect" v-model="file" outlined="outlined" dense="dense" messages="Select file to continue" accept="image/*"> </v-file-input>
      </template>
    </v-card-text>
  </v-card>
</v-dialog>           
</template>

<script>

export default {
  name: 'UploadAvata',
  props: { value: Boolean },
  data: () => ({
    file: null,
    fileUrl: ''
  }),
  methods: {
    onFinishCropping () {
      const options = {
        type: 'blob',
        size: { width: 256, height: 256 },
        quality: 75,
        circle: false,
        format: 'jpeg'
      }
      this.$refs.croppie.result(options, output => {
        console.log(output)
        const data = new FormData()
        data.append('avatar', output)
        this.$axios.put('/api/profile/image', data, { headers: { 'Content-Type': `multipart/form-data; boundary=${data._boundary}` } }).then(res => {
          if (res.data.image) {
            this.$store.dispatch('setUserImage', res.data.image)
          }
          this.$snackbar.requestSuccess(res)
          this.onClose()
        }).catch(this.$snackbar.requestError)
      })
    },
    onFileSelect () {
      console.log('File Select')
      const file = new FileReader()
      file.addEventListener('load', () => {
        this.fileUrl = file.result
        this.$refs.croppie.bind({
          url: file.result
        })
      })
      file.readAsDataURL(this.file)
    },
    onClose () {
      this.$refs.croppie.refresh()
      this.file = null
      this.$emit('input', false)
    }
  }
}
</script>