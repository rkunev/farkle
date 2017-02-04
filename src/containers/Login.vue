<template>
    <div class="login-page">
        <img src="static/dice-logo.svg">
        <p>
            <md-button primary v-if="!isUserOffline" @click="login">Google</md-button>
            <md-button primary-inverted @click="loginAnonymously">Incognito</md-button>
        </p>
    </div>
</template>

<script>
    import { signIn, createAndSignInAsAnonymous } from 'services/authService';
    import { isOffline } from 'services/offlineService';

    import MdButton from 'components/MdButton';

    export default {
        name: 'login',
        components: { MdButton },
        data() {
            return {
                isUserOffline: isOffline()
            }
        },
        methods: {
            login() {
                signIn()
                    .then(_onSuccessfulSignIn.bind(this));
            },
            loginAnonymously() {
                createAndSignInAsAnonymous()
                    .then(_onSuccessfulSignIn.bind(this));
            }
        },
    };

    function _onSuccessfulSignIn(user) {
        const path = this.$route.query.redirect || '/';

        this.$router.replace(path);
    }
</script>

<style lang="scss">
    .login-page {
        height: 100%;
        text-align: center;
        padding-top: 60px;
        background-image: repeating-radial-gradient(at right bottom, rgb(0, 188, 212) 0%, rgb(76, 175, 80) 100%);
    }
</style>
