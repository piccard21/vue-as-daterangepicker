import Vue from 'vue'
import DaterangePicker from './DaterangePicker.vue'

const plugin = {
    install(Vue, options) {
        Vue.component('DaterangePicker', DaterangePicker)
    }
}

export default plugin