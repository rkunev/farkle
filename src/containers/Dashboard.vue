<template>
    <div class="dashboard-page">
        Hello again,
        <p>{{ userName }}</p>

        <button type="button" v-if="!isOffline" @click="logOut">Sign out</button>

        <p>
            <router-link to="/users">Users</router-link>
        </p>
    </div>
</template>

<script>
    import { signOut } from 'services/authService';
    import offlineService from 'services/offlineService';
    import { mapGetters } from 'vuex';

    export default {
        name: 'dashboard',
        data() {
            return {
                isOffline: offlineService.isOffline()
            }
        },
        computed: {
            ...mapGetters(['userName']),
        },
        methods: {
            logOut() {
                signOut().then(() => {
                    this.$router.push('/auth');
                });
            }
        }
    };
</script>
