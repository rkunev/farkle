<template>
    <div class="app-wrapper">
        <navigation-drawer v-show="isUserAuthenticated" :is-open="isOpen" @close="closeMenu"></navigation-drawer>

        <div class="layout">
            <!-- Toolbar placeholder -->
            <div class="header">
                <div class="menu-icon" v-show="isUserAuthenticated">
                    <md-button @click.stop="openMenu"><img src="~assets/svg/menu.svg"></md-button>
                </div>
            </div>

            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import { isAuthenticated } from 'services/authService';
    import { getCurrentUser } from 'services/userService';

    import NavigationDrawer from 'components/NavigationDrawer';
    import MdButton from 'components/MdButton';

    export default {
        name: 'app-wrapper',
        components: { NavigationDrawer, MdButton },
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
            this.$store.dispatch('updateUser', getCurrentUser());

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
