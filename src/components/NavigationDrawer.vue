<template>
    <div class="navigation-drawer" v-focus="isOpen" @keyup.esc="closeMenu" :class="{ 'navigation-drawer--is-open': isOpen }">
        <div class="navigation-drawer__overlay" @click="closeMenu"></div>

        <div class="navigation-drawer__panel">
            <div class="navigation-drawer__panel-header">
                <div class="navigation-drawer__logo">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="150.23" height="150.23" viewBox="0 0 150.23 150.23" xml:space="preserve" enable-background="new 0 0 150.233 150.233"><path fill="#333" d="M67.71 72.83V22.92c0-4.91-3.98-8.9-8.9-8.9H8.9c-4.91 0-8.9 3.99-8.9 8.9V72.82c0 4.91 3.98 8.9 8.9 8.9h49.9C63.72 81.73 67.71 77.74 67.71 72.83zM19.97 72.44c-3.68 0-6.68-2.99-6.68-6.68 0-3.68 3-6.67 6.68-6.67 3.69 0 6.68 3 6.68 6.68C26.64 69.45 23.66 72.44 19.97 72.44zM19.97 54.64c-3.68 0-6.68-2.99-6.68-6.67 0-3.69 3-6.68 6.68-6.68 3.69 0 6.68 2.99 6.68 6.68C26.64 51.65 23.66 54.64 19.97 54.64zM19.97 36.83c-3.68 0-6.68-2.99-6.68-6.67 0-3.68 3-6.68 6.68-6.68 3.69 0 6.68 3 6.68 6.68C26.64 33.84 23.66 36.83 19.97 36.83zM46.67 72.44c-3.68 0-6.68-2.99-6.68-6.68 0-3.68 2.99-6.67 6.68-6.67 3.69 0 6.68 3 6.68 6.68C53.35 69.45 50.36 72.44 46.67 72.44zM46.67 54.64c-3.68 0-6.68-2.99-6.68-6.67 0-3.69 2.99-6.68 6.68-6.68 3.69 0 6.68 2.99 6.68 6.68C53.35 51.65 50.36 54.64 46.67 54.64zM46.67 36.83c-3.68 0-6.68-2.99-6.68-6.67 0-3.68 2.99-6.68 6.68-6.68 3.69 0 6.68 3 6.68 6.68C53.35 33.84 50.36 36.83 46.67 36.83z"/><path fill="#333" d="M147.6 85.59l-35.41-35.16c-3.48-3.46-9.12-3.44-12.58 0.04l-35.16 35.41c-3.46 3.48-3.44 9.12 0.04 12.59l35.41 35.16c3.49 3.47 9.12 3.45 12.58-0.04l35.17-35.41C151.11 94.69 151.09 89.05 147.6 85.59zM103.94 64.97c2.59-2.61 6.83-2.63 9.44-0.03 2.61 2.6 2.63 6.83 0.03 9.44 -2.6 2.62-6.83 2.63-9.44 0.03C101.36 71.81 101.34 67.58 103.94 64.97zM88.32 99.64c-2.6 2.61-6.82 2.63-9.44 0.03 -2.61-2.59-2.63-6.83-0.03-9.44 2.59-2.61 6.83-2.63 9.44-0.03C90.91 92.8 90.92 97.03 88.32 99.64zM91.39 77.6c2.6-2.61 6.83-2.63 9.44-0.03 2.61 2.59 2.63 6.83 0.03 9.44 -2.59 2.61-6.82 2.63-9.44 0.04C88.81 84.45 88.8 80.21 91.39 77.6zM107.27 118.46c-2.6 2.61-6.82 2.63-9.44 0.03 -2.61-2.59-2.63-6.82-0.03-9.44 2.59-2.61 6.83-2.62 9.44-0.03C109.85 111.61 109.87 115.85 107.27 118.46zM119.82 105.83c-2.6 2.61-6.82 2.63-9.44 0.03 -2.61-2.59-2.63-6.82-0.03-9.44 2.6-2.62 6.83-2.63 9.44-0.04C122.4 98.98 122.41 103.21 119.82 105.83zM132.36 93.2c-2.6 2.61-6.82 2.63-9.44 0.03 -2.61-2.6-2.63-6.83-0.03-9.44 2.6-2.61 6.83-2.63 9.44-0.04C134.94 86.35 134.96 90.58 132.36 93.2z"/></svg>

                    Farkle
                </div>

                <div class="navigation-drawer__user">
                    <div class="navigation-drawer__user-avatar">
                        R
                    </div>

                    <h2 class="navigation-drawer__user-name">Rosen Kunev</h2>
                    <h3 class="navigation-drawer__user-email">rkunev@gmail.com</h3>
                </div>
            </div>

            <ul class="navigation-drawer__list">
                <li class="navigation-drawer__item">
                    <a class="navigation-drawer__link" href="">Home</a>
                </li>
                <li class="navigation-drawer__item">
                    <a class="navigation-drawer__link" href="">New Game</a>
                </li>
                <li class="navigation-drawer__item">
                    <a class="navigation-drawer__link" href="">Load Game</a>
                </li>
                <li class="navigation-drawer__item">
                    <a class="navigation-drawer__link" href="">Profile</a>
                </li>
                <li class="navigation-drawer__item">
                    <a class="navigation-drawer__link navigation-drawer__link--divider" href="">Leaderboard</a>
                </li>
                <li class="navigation-drawer__item">
                    <a class="navigation-drawer__link" href="">Settings</a>
                </li>
                <li class="navigation-drawer__item">
                    <a class="navigation-drawer__link" href="">About</a>
                </li>
                <li class="navigation-drawer__item">
                    <a class="navigation-drawer__link" href="">Sign Out</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navigation-drawer',
        methods: {
            closeMenu(event) {
                this.$emit('close', event);
            },
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
        background: #eee;
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
    }

    .navigation-drawer__logo {
        display: none;
    }

    // @todo make a mixin for media queries
    @media screen and (min-width: 960px) {
        .navigation-drawer__logo {
            padding: 16px;
            height: 64px;
            border-bottom: 1px solid $divider-color;

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
        padding: 20px;
    }

    .navigation-drawer__item {
        margin-bottom: 16px;
    }

    .navigation-drawer__link {
        text-decoration: none;

        &:focus {
            text-decoration: underline;
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