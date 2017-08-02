<template>
    <header class="app-bar">
        <md-button icon class="app-bar__nav-drawer-toggle" @click="toggleMenu">
            <svg-icon icon="menu"></svg-icon>
        </md-button>

        <h1 class="app-bar__title">{{ $route.meta.title }}</h1>

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
            toggleMenu(event) {
                this.$emit('menu-toggle', event);
            }
        },
    }
</script>

<style lang="scss">
    @import "~assets/scss/_media-queries";
    @import "~assets/scss/_palette";
    @import "~assets/scss/_typography";

    .app-bar {
        flex-shrink: 0;
        background-color: $primary-color;
        display: flex;
        align-items: center;
        height: 56px;
        color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .26);

        @include tablet-landscape-up {
            height: 64px;
        }
    }

    .app-bar__nav-drawer-toggle {
        margin-left: 10px;
        margin-right: 24px;
    }

    .app-bar__more {
        margin-left: auto;
        margin-right: 4px;
    }

    .app-bar__title {
        @include font-title;
    }
</style>
