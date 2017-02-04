<template>
    <div class="app-wrapper">
        <navigation-drawer v-show="isUserAuthenticated" :is-open="isOpen" @close-menu="closeMenu"></navigation-drawer>

        <app-bar v-show="isUserAuthenticated" @open-menu="openMenu"></app-bar>

        <router-view></router-view>
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
    .app-wrapper {
        height: 100%;
    }
</style>
