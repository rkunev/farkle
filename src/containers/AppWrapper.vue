<template>
    <div class="app-wrapper">
        <navigation-drawer v-show="isAuthenticated" :is-open="isOpen" @close="closeMenu"></navigation-drawer>

        <div class="layout">
            <!-- Toolbar placeholder -->
            <div class="header">
                <div class="menu-icon" v-show="isAuthenticated">
                    <md-button @click.stop="openMenu"><img src="~assets/svg/menu.svg"></md-button>
                </div>
            </div>

            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import NavigationDrawer from 'components/NavigationDrawer';
    import MdButton from 'components/MdButton';
    import * as authService from 'services/authService';
    import userService from 'services/userService';

    export default {
        name: 'app-wrapper',
        components: { NavigationDrawer, MdButton },
        data() {
            return {
                isOpen: false,
                isAuthenticated: false
            }
        },
        methods: {
            openMenu() {
                this.isOpen = true;
            },
            closeMenu() {
                this.isOpen = false;
            },
        },
        beforeRouteEnter(to, from, next) {
            authService.isAuthenticated()
                .then(user => next(vm => vm.isAuthenticated = !!user))
        },
        created() {
            const user = userService.getCurrentUser();

            this.$store.dispatch('updateUser', user);
        }
    }
</script>
