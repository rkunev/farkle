<template>
    <div class="app-wrapper">
        <navigation-drawer :is-open="isOpen" @close-menu="closeMenu"></navigation-drawer>

        <div class="main-content-wrapper">
            <app-bar @menu-toggle="toggleMenu"></app-bar>

            <router-view class="main-content"></router-view>
        </div>
    </div>
</template>

<script>
    import { isAuthenticated } from 'services/authService';
    import { getCurrentUser } from 'services/userService';
    import { isTabletAndUp, saveMenuState, getMenuState } from 'services/navigationDrawerService';

    import NavigationDrawer from 'components/NavigationDrawer';
    import MdButton from 'components/MdButton';
    import SvgIcon from 'components/SvgIcon';
    import AppBar from 'components/AppBar';

    export default {
        name: 'app-wrapper',
        components: { NavigationDrawer, MdButton, SvgIcon, AppBar },
        data() {
            return {
                isOpen: isTabletAndUp() && getMenuState(),
                isUserAuthenticated: false
            }
        },
        methods: {
            closeMenu() {
                this.isOpen = false;
                saveMenuState(this.isOpen);
            },
            toggleMenu() {
                this.isOpen = !this.isOpen;
                saveMenuState(this.isOpen);
            },
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

    .navigation-drawer--is-open + .main-content-wrapper .main-content {
        transform: translateX(160px);
    }

    .main-content-wrapper {
        flex: 1 1 auto;
    }

    .main-content {
        padding: 28px 24px 0;
        width: 100%;
        max-width: 660px;
        margin-left: auto;
        margin-right: auto;
        transition: transform .28s cubic-bezier(0,0,0.3,1);
    }
</style>
