<template>
    <div class="dashboard-page">
        Hello again,
        <p>{{ user.name }}</p>
    </div>
</template>

<script>
    import { isOffline } from 'services/offlineService';
    import { mapGetters } from 'vuex';

    export default {
        name: 'dashboard',
        data() {
            return {
                isUserOffline: isOffline(),
            }
        },
        computed: {
            ...mapGetters(['user']),
        },
    };
</script>

<style lang="scss">
</style>
