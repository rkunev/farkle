<template>
    <div class="login-page">
        <img src="static/dice-logo.svg">
        <p>
            <md-button primary v-if="!isOffline" @click="login">Google</md-button>
            <md-button primary-inverted @click="loginAnonymously">Incognito</md-button>
        </p>
    </div>
</template>

<script>
    import authService from 'src/services/authService';
    import offlineService from 'src/services/offlineService';
    import MdButton from 'src/components/MdButton';
    import { mapActions } from 'vuex';

    export default {
        name: 'login',
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
            },
            ...mapActions(['updateUser']),
        },
    };

    function _onSuccessfulSignIn(user) {
        const path = ('redirect' in this.$router.currentRoute.query)
            ? this.$router.currentRoute.query.redirect
            : '/';

        this.updateUser(user);

        this.$router.push(path);
    }
</script>

<style lang="scss">
    .login-page {
        text-align: center;
        padding-top: 60px;
    }
</style>
<style lang="scss">
    body {
        background-image: repeating-radial-gradient(at right bottom, rgb(0, 188, 212) 0%, rgb(76, 175, 80) 100%);
    }
</style>
