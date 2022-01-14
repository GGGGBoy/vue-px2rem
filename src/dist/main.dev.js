"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

require("./assets/css/reset.css");

require("./assets/js/mock.js");

require("amfe-flexible");

var _axios = _interopRequireDefault(require("axios"));

var _index = _interopRequireDefault(require("./router/index.js"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _vant = require("vant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

_vue["default"].use(_vant.Swipe).use(_vant.SwipeItem).use(_vant.Lazyload).use(_vant.Calendar).use(_vant.Cell).use(_vant.CellGroup).use(_vant.Button);

_vue["default"].config.productionTip = false;
_vue["default"].prototype.$http = _axios["default"];
new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _index["default"]
}).$mount('#app');