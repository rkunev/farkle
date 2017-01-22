<template>
    <div class="dashboard-page">
        Dashboard
        <button type="button" v-if="!isOffline" @click="signOut">Sign out</button>
        <p>
            <router-link to="/users">Users</router-link>
        </p>
    </div>
</template>

<script>
    import authService from 'src/services/authService';
    import userService from 'src/services/userService';
    import offlineService from 'src/services/offlineService';

    export default {
        name: 'dashboard',
        data() {
            return {
                isOffline: offlineService.isOffline()
            }
        },
        methods: {
            signOut() {
                authService.signOut()
                    .then(isAuthenticated => {
                        this.$router.push('/auth');
                    });
            }
        },
        mounted() {
            const user = userService.getCurrentUser();
            // console.log(user.displayName);
        }
    };
</script>
