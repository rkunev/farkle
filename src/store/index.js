import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import dice from './modules/dice';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { user, dice }
});
