<template>
    <div class="app-wrapper">
        <navigation-drawer v-show="isUserAuthenticated" :is-open="isOpen" @close="closeMenu"></navigation-drawer>

        <div class="layout">
            <!-- Toolbar placeholder -->
            <div class="header">
                <div class="menu-icon" v-show="isUserAuthenticated">
                    <md-button @click.stop="openMenu">
                        <svg-icon icon="menu"></svg-icon>
                    </md-button>
                </div>
            </div>

            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import { firebase } from 'services/firebaseService';
    import { isAuthenticated } from 'services/authService';
    import { getCurrentUser } from 'services/userService';

    import NavigationDrawer from 'components/NavigationDrawer';
    import MdButton from 'components/MdButton';
    import SvgIcon from 'components/SvgIcon';

    export default {
        name: 'app-wrapper',
        components: { NavigationDrawer, MdButton, SvgIcon },
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
