<template>
    <div id="app">
        <navigation-drawer></navigation-drawer>

        <div class="layout">
            <div class="header">
                <div class="menu-icon">
                    <md-button><img src="~assets/svg/menu.svg"></md-button>
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
    }
</script>

<style lang="scss" src="assets/scss/_reset.scss"></style>
<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding-top: 60px;
    }


    .layout {
        width: 375px;
        height: 667px;
        background-color: #f5f5f5;
        position: relative;
    }

    // throw out style
    .header {
        background-color: #ccc;
    }

    .app-menu {
        width: 300px;
        height: 667px;
        box-shadow: none;
        background-color: #ddd;
    }

    .menu:after {
        width: 375px;
        height: 667px;
    }
</style>
