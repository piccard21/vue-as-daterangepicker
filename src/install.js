import Vue from 'vue'
import DateRangePicker from './App.vue'

const plugin = {
    install(Vue, options) {
        Vue.component('DateRangePicker', DateRangePicker)
    }
}

export default plugin