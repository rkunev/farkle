<template>
    <div class="login-page">
        Login page
        <button v-if="!isOffline" @click="login">Google</button>
        <button @click="loginAnonymously">Incognito</button>
    </div>
</template>

<script>
    import authService from 'src/services/authService';
    import offlineService from 'src/services/offlineService';

    export default {
        name: 'login-container',
        data() {
            return {
                isOffline: offlineService.isOffline()
            }
        },
        methods: {
            login() {
                authService.signIn()
                    .then(_onSuccessfulSignIn.bind(this));
            },
            loginAnonymously() {
                authService.createAndSignInAsAnonymous()
                    .then(_onSuccessfulSignIn.bind(this));
            }
        },
        created() {

        }
    };

    function _onSuccessfulSignIn(isAuthenticated) {
        const toPath = ('redirect' in this.$router.currentRoute.query)
            ? this.$router.currentRoute.query.redirect
            : '/';

        this.$router.push(toPath);
    }
</script>

<style scoped lang="scss">
</style>
