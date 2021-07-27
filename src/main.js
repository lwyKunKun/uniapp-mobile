import Vue from "vue";
import App from "./App";
import uView from "uview-ui";
import { getWindowHeight } from "./util/util";
import request from "@/request/request.js";

Vue.use(uView);
Vue.config.productionTip = false;
Vue.prototype.getWindowHeight = getWindowHeight();
Vue.prototype.$request = request;

App.mpType = "app";

const app = new Vue({
    ...App,
});
app.$mount();