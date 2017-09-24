import EventBus from 'services/eventBusService';

export const SOFT_REFRESH = 'soft-refresh';

export default {
    created() {
        if (typeof this.onSoftRefresh === 'function') {
            EventBus.$on(SOFT_REFRESH, this.onSoftRefresh);
        }
    },
    beforeDestroy() {
        EventBus.$off(SOFT_REFRESH, this.onSoftRefresh);
    },
}

