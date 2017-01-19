<template>
    <div class="login-page">
        <img src="static/dice-logo.svg">
        <p>
            <button class="button button--primary-inverted" v-if="!isOffline" @click="">Google</button>
            <button class="button button--accent" @click="loginAnonymously">Incognito</button>
        </p>
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

<style lang="scss" scoped>
    @import '~assets/scss/_buttons.scss';

    .login-page {
        text-align: center;
    }

    button {
        box-shadow: none;
        transition: box-shadow .2s ease-out;

        &:hover {
            box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
        }

        &:focus {
            box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.4);
        }
    }
</style>
<style lang="scss">
    body {
        background-image: repeating-radial-gradient(at right bottom, rgb(0, 188, 212) 0%, rgb(76, 175, 80) 100%);
    }
</style>
