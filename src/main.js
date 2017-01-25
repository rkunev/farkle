import Vue from 'vue';
import App from './App';
import { router } from './router';
import offlineService from 'services/offlineService';
import focusDirective from 'src/directives/focus';
import store from 'src/store';

Vue.directive(focusDirective.name, focusDirective.definition);

offlineService.initServiceWorker();

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
    store
});
