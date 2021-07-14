import Vue from "vue";
import App from "./App";
import uView from "uview-ui";
import { getWindowHeight } from "./util/util";
import feui from "feui";

Vue.use(uView);
Vue.use(feui);
Vue.config.productionTip = false;
Vue.prototype.getWindowHeight = getWindowHeight();

App.mpType = "app";

const app = new Vue({
    ...App,
});
app.$mount();