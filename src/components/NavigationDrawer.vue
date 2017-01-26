<template>
    <div class="navigation-drawer" v-focus="isOpen" @keyup.esc="closeMenu" :class="{ 'navigation-drawer--is-open': isOpen }">
        <div class="navigation-drawer__overlay" @click="closeMenu"></div>

        <div class="navigation-drawer__panel">
            <div class="navigation-drawer__panel-header">
                <div class="navigation-drawer__logo">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="150.23" height="150.23" viewBox="0 0 150.23 150.23" xml:space="preserve" enable-background="new 0 0 150.233 150.233"><path fill="#000000" d="M67.71 72.83V22.92c0-4.91-3.98-8.9-8.9-8.9H8.9c-4.91 0-8.9 3.99-8.9 8.9V72.82c0 4.91 3.98 8.9 8.9 8.9h49.9C63.72 81.73 67.71 77.74 67.71 72.83zM19.97 72.44c-3.68 0-6.68-2.99-6.68-6.68 0-3.68 3-6.67 6.68-6.67 3.69 0 6.68 3 6.68 6.68C26.64 69.45 23.66 72.44 19.97 72.44zM19.97 54.64c-3.68 0-6.68-2.99-6.68-6.67 0-3.69 3-6.68 6.68-6.68 3.69 0 6.68 2.99 6.68 6.68C26.64 51.65 23.66 54.64 19.97 54.64zM19.97 36.83c-3.68 0-6.68-2.99-6.68-6.67 0-3.68 3-6.68 6.68-6.68 3.69 0 6.68 3 6.68 6.68C26.64 33.84 23.66 36.83 19.97 36.83zM46.67 72.44c-3.68 0-6.68-2.99-6.68-6.68 0-3.68 2.99-6.67 6.68-6.67 3.69 0 6.68 3 6.68 6.68C53.35 69.45 50.36 72.44 46.67 72.44zM46.67 54.64c-3.68 0-6.68-2.99-6.68-6.67 0-3.69 2.99-6.68 6.68-6.68 3.69 0 6.68 2.99 6.68 6.68C53.35 51.65 50.36 54.64 46.67 54.64zM46.67 36.83c-3.68 0-6.68-2.99-6.68-6.67 0-3.68 2.99-6.68 6.68-6.68 3.69 0 6.68 3 6.68 6.68C53.35 33.84 50.36 36.83 46.67 36.83z"/><path fill="#000000" d="M147.6 85.59l-35.41-35.16c-3.48-3.46-9.12-3.44-12.58 0.04l-35.16 35.41c-3.46 3.48-3.44 9.12 0.04 12.59l35.41 35.16c3.49 3.47 9.12 3.45 12.58-0.04l35.17-35.41C151.11 94.69 151.09 89.05 147.6 85.59zM103.94 64.97c2.59-2.61 6.83-2.63 9.44-0.03 2.61 2.6 2.63 6.83 0.03 9.44 -2.6 2.62-6.83 2.63-9.44 0.03C101.36 71.81 101.34 67.58 103.94 64.97zM88.32 99.64c-2.6 2.61-6.82 2.63-9.44 0.03 -2.61-2.59-2.63-6.83-0.03-9.44 2.59-2.61 6.83-2.63 9.44-0.03C90.91 92.8 90.92 97.03 88.32 99.64zM91.39 77.6c2.6-2.61 6.83-2.63 9.44-0.03 2.61 2.59 2.63 6.83 0.03 9.44 -2.59 2.61-6.82 2.63-9.44 0.04C88.81 84.45 88.8 80.21 91.39 77.6zM107.27 118.46c-2.6 2.61-6.82 2.63-9.44 0.03 -2.61-2.59-2.63-6.82-0.03-9.44 2.59-2.61 6.83-2.62 9.44-0.03C109.85 111.61 109.87 115.85 107.27 118.46zM119.82 105.83c-2.6 2.61-6.82 2.63-9.44 0.03 -2.61-2.59-2.63-6.82-0.03-9.44 2.6-2.62 6.83-2.63 9.44-0.04C122.4 98.98 122.41 103.21 119.82 105.83zM132.36 93.2c-2.6 2.61-6.82 2.63-9.44 0.03 -2.61-2.6-2.63-6.83-0.03-9.44 2.6-2.61 6.83-2.63 9.44-0.04C134.94 86.35 134.96 90.58 132.36 93.2z"/></svg>

                    Farkle
                </div>

                <div class="navigation-drawer__user">
                    <div class="navigation-drawer__user-avatar">
                        R
                    </div>

                    <h2 class="navigation-drawer__user-name">{{ userName }}</h2>
                    <h3 class="navigation-drawer__user-email">{{ userEmail }}</h3>
                </div>
            </div>

            <ul class="navigation-drawer__list">
                <li class="navigation-drawer__item">
                    <md-button @click="closeMenu" class="navigation-drawer__link" to="/" active-class="navigation-drawer__link--active">
                        <svg fill="rgba(0, 0, 0, 0.5)" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                        </svg>

                        <span>Dashboard</span>
                    </md-button>
                </li>
                <li class="navigation-drawer__item">
                    <md-button @click="closeMenu" class="navigation-drawer__link" to="/users" active-class="navigation-drawer__link--active">
                        <svg fill="rgba(0, 0, 0, 0.5)" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                        </svg>

                        <span>New Game</span>
                    </md-button>
                </li>
                <li class="navigation-drawer__item">
                    <md-button @click="closeMenu" class="navigation-drawer__link" to="/users" active-class="navigation-drawer__link--active">
                        <svg fill="rgba(0, 0, 0, 0.5)" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/>
                        </svg>

                        <span>Load Game</span>
                    </md-button>
                </li>
                <li class="navigation-drawer__item">
                    <md-button @click="closeMenu" class="navigation-drawer__link" to="/users" active-class="navigation-drawer__link--active">
                        <svg fill="rgba(0, 0, 0, 0.5)" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>

                        <span>Profile</span>
                    </md-button>
                </li>
                <li class="navigation-drawer__item ">
                    <md-button @click="closeMenu" class="navigation-drawer__link" to="/users" active-class="navigation-drawer__link--active">
                        <svg fill="rgba(0, 0, 0, 0.5)" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>

                        <span>Leaderboard</span>
                    </md-button>
                </li>
                <li class="navigation-drawer__item navigation-drawer__item--subheader">
                    <h2>Help &amp; Feadback</h2>
                </li>
                <li class="navigation-drawer__item">
                    <md-button @click="closeMenu" class="navigation-drawer__link" to="/users" active-class="navigation-drawer__link--active">
                        <svg fill="rgba(0, 0, 0, 0.5)" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
                        </svg>

                        <span>Settings</span>
                    </md-button>
                </li>
                <li class="navigation-drawer__item">
                    <md-button @click="closeMenu" class="navigation-drawer__link" to="/users" active-class="navigation-drawer__link--active">
                        <svg fill="rgba(0, 0, 0, 0.5)" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                        </svg>

                        <span>About</span>
                    </md-button>
                </li>
                <li class="navigation-drawer__item">
                    <md-button @click="closeMenu" class="navigation-drawer__link" to="/users">
                        <svg fill="rgba(0, 0, 0, 0.5)" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 0H0v24h24z" fill="none"/>
                            <path d="M13.91 15.59L12.5 17l-5-5 5-5 1.41 1.41L11.33 11H21v2h-9.67l2.58 2.59zM5 3h14c1.11 0 2 .9 2 2v4h-2V5H5v14h14v-4h2v4c0 1.1-.89 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z"/>
                        </svg>

                        <span>Sign Out</span>
                    </md-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import MdButton from 'components/MdButton';
    import { mapGetters } from 'vuex';

    export default {
        name: 'navigation-drawer',
        components: { MdButton },
        methods: {
            closeMenu(event) {
                this.$emit('close', event);
            }
        },
        computed: {
            ...mapGetters(['userName', 'userEmail']),
        },
        props: {
            isOpen: Boolean
        }
    }
</script>

<style lang="scss">
    @import '~assets/scss/_settings.scss';
    @import '~assets/scss/_palette.scss';
    @import '~assets/scss/_fonts.scss';

    .navigation-drawer {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 1;
    }

    .navigation-drawer--is-open {
        .navigation-drawer__overlay {
            pointer-events: auto;
            opacity: 1;
        }

        .navigation-drawer__panel {
            transform: translateX(0);
        }
    }

    .navigation-drawer__panel {
        background: #fff;
        position: relative;
        max-width: 320px;
        margin-right: 56px;
        height: 100%;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
        transform: translateX(-100%);
        display: flex;
        flex-direction: column;
        will-change: transform;
        pointer-events: auto;
        transition: transform .28s cubic-bezier(0,0,0.3,1);
        overflow-y: auto;
    }

    .navigation-drawer__logo {
        display: none;
    }

    // @todo make a mixin for media queries
    @media screen and (min-width: 960px) {
        .navigation-drawer__logo {
            display: block;
            padding: 16px;
            height: 64px;

            svg {
                vertical-align: middle;
                height: 100%;
                width: auto;
                margin-right: 10px;
            }
        }
    }

    .navigation-drawer__panel-header {
        background: transparent url('/static/table-bg_s.jpeg') no-repeat bottom left;
        background-size: cover;
        border-bottom: 1px solid $divider-color;
        color: #fff;
    }

    // @todo make a mixin for media queries
    @media screen and (min-width: 960px) {
        .navigation-drawer__panel-header {
            background: #fff;
            color: #333;
        }
    }

    // @todo make a mixin for media queries
    @media screen and (min-width: 960px) {
        .navigation-drawer__user {
            display: none;
        }
    }

    .navigation-drawer__user {
        padding: 16px;
    }

    .navigation-drawer__user-avatar {
        display: inline-block;
        border-radius: 50%;
        overflow: hidden;
        width: 64px;
        height: 64px;

        background: salmon;
        color: #fff;
        font-size: 32px;
        line-height: 64px;
        text-align: center;

        img {
            width: 100%;
        }
    }

    .navigation-drawer__user-name {
        margin-top: 8px;
        @include font-body-2;
    }

    .navigation-drawer__user-email {
        @include font-body-1;
    }

    .navigation-drawer__list {
        padding-top: 8px;
    }

    .navigation-drawer__item {
        svg { margin-right: 28px; }
        svg, span { vertical-align: middle }
    }

    .navigation-drawer__item--subheader {
        border-top: 1px solid $divider-color;
        margin-top: 4px;
        padding-top: 4px;
        @include navigation-drawer-subheader;

        line-height: 48px;
        padding-left: 16px;
        color: rgba(0, 0, 0, .54);
    }

    .navigation-drawer__link.md-button {
        @include font-body-2;

        color: rgba(0, 0, 0, .87);
        height: 48px;
        line-height: 48px;
        text-align: left;
        text-decoration: none;
        text-transform: none;
        width: 100%;

        &.navigation-drawer__link--active,
        &:hover {
            background: rgba(0, 0, 0, .1);
            color: $primary-color;

            svg { fill: $primary-color }
        }

        &.navigation-drawer__link--active:hover {
            color: $primary-color-dark;
            svg { fill: $primary-color-dark }
        }
    }

    .navigation-drawer__overlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.4);
        opacity: 0;
        will-change: opacity;
        pointer-events: none;
        transition: opacity 0.3s cubic-bezier(0,0,0.3,1);
    }
</style>
