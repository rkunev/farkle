<template>
    <div id="app">
        <navigation-drawer :is-open="isOpen" @close="closeMenu"></navigation-drawer>

        <div class="layout">
            <!-- Toolbar placeholder -->
            <div class="header">
                <div class="menu-icon">
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

    export default {
        name: 'app',
        components: {
            NavigationDrawer,
            MdButton
        },
        data() {
            return {
                isOpen: false
            }
        },
        methods: {
            openMenu() {
                this.isOpen = true;
            },
            closeMenu() {
                this.isOpen = false;
            }
        }
    }
</script>

<style lang="scss" src="assets/scss/_reset.scss"></style>
<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
