import Vue from 'vue';
import App from './App';
import { router } from './router';
import { initServiceWorker } from 'services/offlineService';
import focusDirective from 'directives/focus';
import store from 'src/store';

Vue.directive(focusDirective.name, focusDirective.definition);

initServiceWorker();

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
    store
});
