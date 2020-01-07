import Vue from 'vue'
import store from '../store'
// import router from '../router'

const br = require('build-robot')
// const br = require('./build-robot')
const conf = {
  vuexInstance: store
}
console.log(br)
Vue.use(br.default, conf)


