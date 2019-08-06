import Vue from "vue";
import App from "./App.vue";
import SvgIcon from "vue-svgicon";
import dictionaries from "./translations/index.js";

Vue.prototype.$legends = dictionaries;

Vue.use(SvgIcon, {
    tagName: "svgicon"
});

const Components = {
    App
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components