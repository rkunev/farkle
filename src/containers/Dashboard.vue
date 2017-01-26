<template>
    <div class="dashboard-page">
        Hello again,
        <p>{{ userName }}</p>

        <button type="button" v-if="!isUserOffline" @click="logOut">Sign out</button>

        <p>
            <router-link to="/users">Users</router-link>
        </p>
    </div>
</template>

<script>
    import { signOut } from 'services/authService';
    import { isOffline } from 'services/offlineService';
    import { mapGetters } from 'vuex';

    export default {
        name: 'dashboard',
        data() {
            return {
                isUserOffline: isOffline()
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
