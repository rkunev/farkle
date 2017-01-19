import Vue from 'vue';
import App from './App';
import { router } from './router';
import offlineService from 'services/offlineService';

offlineService.initServiceWorker();

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
});
