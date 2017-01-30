<template>
    <header class="app-bar">
        <md-button icon class="app-bar__nav-drawer-toggle" @click.stop="openMenu">
            <svg-icon icon="menu"></svg-icon>
        </md-button>

        <h1>{{ $route.meta.title }}</h1>

        <md-button icon class="app-bar__more">
            <svg-icon icon="more"></svg-icon>
        </md-button>
    </header>
</template>

<script>
    import SvgIcon from 'components/SvgIcon';
    import MdButton from 'components/MdButton';

    export default {
        name: 'app-bar',
        components: { SvgIcon, MdButton },
        methods: {
            openMenu(event) {
                this.$emit('open-menu', event);
            }
        },
    }
</script>

<style lang="scss">
    @import "~assets/scss/_palette";

    .app-bar {
        background-color: $primary-color;
        display: flex;
        align-items: center;
        height: 56px;
        // align-items: center;
        color: #fff;
    }

    // @todo make a mixin for media queries
    @media screen and (min-width: 960px) {
        .app-bar {
            // height: 64px;
        }
    }

    .app-bar__more {
        margin-left: auto;
    }

    button, h1 {
        // vertical-align: middle;
    }

    // svg {
    //     display: inline-block;
    //     vertical-align: middle;
    // }
</style>
