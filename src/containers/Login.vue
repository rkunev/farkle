<template>
    <div class="login-page">
        <img class="login-page__logo" src="static/dice-logo.svg">

        <div class="login-page__buttons">
            <h1 class="login-page__title">Hey, welcome to Farkle!</h1>

            <md-button primary v-if="!isUserOffline" @click="login">Log in with Google</md-button>

            <div class="login-page__divider">OR</div>

            <md-button primary-inverted @click="loginAnonymously">Play with a Local Account</md-button>
        </div>

        <div class="login-page__terms">
            By continuing, you agree to our
            <router-link class="login-page__terms-links" to="/terms-of-service">Terms of Service</router-link>
            and
            <router-link class="login-page__terms-links" to="/terms-of-service#privacy">Privacy Policy</router-link>
        </div>
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
    @import '~assets/scss/_typography';
    @import '~assets/scss/_media-queries';
    @import '~assets/scss/_palette';

    .login-page {
        $old-light-green: rgb(0, 188, 212);
        $old-dark-green: rgb(76, 175, 80);

        min-height: 100%;
        text-align: center;
        background-image: repeating-radial-gradient(at right bottom, #459af4 0%, #64d9c7 100%);
        display: flex;
        flex-direction: column;
        color: #fff;
        align-items: center;
        padding: 95px 20px 20px;
        position: relative;

        @media (min-height: 480px) and (min-width: 600px) {
            padding-top: 125px;
        }

        @media (max-height: 320px) {
            padding-top: 15px;
        }
    }

    .login-page__logo {
        width: 75px;
        position: absolute;
        top: 20px;

        @media (min-height: 480px) and (min-width: 600px) {
            width: 100px;
        }

        @media (max-height: 320px) {
            top: 15px;
            right: 20px;
            width: 50px;
        }
    }

    .login-page__buttons {
        margin: auto;

        @include tablet-portrait-up {
            width: 440px;
        }

        button {
            display: block;
            width: 100%;
            margin: 0 auto 12px;
            max-width: 320px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    .login-page__title {
        @include font-headline;
        margin-bottom: 12px;

        @media (min-height: 480px) and (min-width: 600px) {
            margin-bottom: 48px;
        }
    }

    .login-page__divider {
        position: relative;
        margin: 20px auto;
        max-width: 320px;

        &:before, &:after {
            content: '';
            display: block;
            position: absolute;
            border-top: 1px solid #fff;
            width: 50px;
        }

        &:before {
            left: 0;
        }

        &:after {
            right: 0;
        }
    }

    .login-page__terms {
        @include font-caption;
        margin-top: 12px;
    }

    .login-page__terms-links {
        color: inherit;
        text-decoration: none;
        font-weight: bold;
    }
</style>
