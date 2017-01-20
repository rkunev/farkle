<template>
    <div class="login-page">
        <img src="static/dice-logo.svg">
        <p>
            <md-button v-if="!isOffline" primary @click="">Google</md-button>
            <!-- <button class="button button--primary-inverted" v-if="!isOffline" @click="">Google</button> -->
            <!-- <button class="button button--accent" @click="loginAnonymously">Incognito</button> -->
        </p>
    </div>
</template>

<script>
    import authService from 'src/services/authService';
    import offlineService from 'src/services/offlineService';
    import MdButton from 'src/components/MdButton';

    export default {
        name: 'login-container',
        components: {
            MdButton
        },
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
    };

    function _onSuccessfulSignIn(isAuthenticated) {
        const toPath = ('redirect' in this.$router.currentRoute.query)
            ? this.$router.currentRoute.query.redirect
            : '/';

        this.$router.push(toPath);
    }
</script>

<style lang="scss" scoped>
    .login-page {
        text-align: center;
    }
</style>
<style lang="scss">
    body {
        background-image: repeating-radial-gradient(at right bottom, rgb(0, 188, 212) 0%, rgb(76, 175, 80) 100%);
    }
</style>
