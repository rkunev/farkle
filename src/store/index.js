import Vue from 'vue';
import Vuex from 'vuex';
import user from 'src/store/modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { user }
});
