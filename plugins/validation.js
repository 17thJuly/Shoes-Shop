import Vue from 'vue'

Vue.prototype.$rules = {
  required: (v => v && v.length) || 'This field is required!',
  password: v => (!v || v && v.length && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(v)) || 'Password must contain at least one lower, upper case character, one digit, 6 minimum length'
}
