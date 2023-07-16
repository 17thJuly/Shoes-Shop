<template>
     <div>
      <v-alert
        v-model="alert"
        border="left"
        close-text="Close Alert"
        color="deep-purple accent-4"
        dark
        dismissible
      >
     Để bảo mật bạn cần phải đặt mật khẩu có kí tự đặt biệt và  kí tự hoa , kí tự thường , số
      </v-alert>
    </div>
</template>
<script>
export default {
    data () {
    return {
      alert: true,
    }
  },
}
</script>