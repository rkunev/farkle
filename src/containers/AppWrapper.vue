<template>
    <div class="app-wrapper">
        <navigation-drawer v-show="true" :is-open="isOpen" @close-menu="closeMenu"></navigation-drawer>

        <div class="main-content-wrapper">
            <app-bar v-show="true" @open-menu="openMenu"></app-bar>

            <router-view class="main-content"></router-view>
        </div>
    </div>
</template>

<script>
    import { isAuthenticated } from 'services/authService';
    import { getCurrentUser } from 'services/userService';

    import NavigationDrawer from 'components/NavigationDrawer';
    import MdButton from 'components/MdButton';
    import SvgIcon from 'components/SvgIcon';
    import AppBar from 'components/AppBar';

    export default {
        name: 'app-wrapper',
        components: { NavigationDrawer, MdButton, SvgIcon, AppBar },
        data() {
            return {
                isOpen: false,
                isUserAuthenticated: false
            }
        },
        methods: {
            openMenu() { this.isOpen = true },
            closeMenu() { this.isOpen = false },
        },
        created() {
            // Update store on every app load, because user might be already authenticated
            this.$store.dispatch('updateUser', getCurrentUser());

            // @todo This might not be needed if we add `isAuthenticated` to the user store
            isAuthenticated()
                .then(isUserAuth => this.isUserAuthenticated = isUserAuth);
        }
    }
</script>

<style lang="scss">
    @import "~assets/scss/_media-queries";
    .navigation-drawer--is-open + .main-content-wrapper {
        overflow-y: auto;
    }

    .app-wrapper,
    .main-content-wrapper {
        display: flex;
        flex-direction: column;
    }

    .app-wrapper {
        min-height: 100%;
        background-color: #fafafa;
        main {
            @include tablet-landscape-up {
                padding-top: 60px;
            }
        }
    }

    .main-content-wrapper {
        flex: 1 1 auto;
    }

    .main-content {
        padding: 28px 24px 0;
        width: 100%;
    }

    .main-content--boxed {
        max-width: 660px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
