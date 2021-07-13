import Vue from "vue";
import App from "./App";
import uView from "uview-ui";
import { getWindowHeight } from "./util/util";

Vue.use(uView);
Vue.config.productionTip = false;
Vue.prototype.getWindowHeight = getWindowHeight();

App.mpType = "app";

const app = new Vue({
    ...App,
});
app.$mount();