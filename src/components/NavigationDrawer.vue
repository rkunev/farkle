<template>
    <div class="navigation-drawer" v-focus="isOpen" @keyup.esc="closeMenu" :class="{ 'navigation-drawer--is-open': isOpen }">
        <div class="navigation-drawer__overlay" @click="closeMenu"></div>

        <div class="navigation-drawer__panel">
            <div class="navigation-drawer__panel-header">
                <div class="navigation-drawer__logo">
                    <svg-icon icon="dice"></svg-icon>

                    Farkle
                </div>

                <div class="navigation-drawer__user">
                    <div class="navigation-drawer__user-avatar">
                        <img v-if="user.avatar" :alt="user.name" :src="user.avatar">
                        <span v-else>{{ userInitials }}</span>
                    </div>

                    <h2 class="navigation-drawer__user-name">{{ user.name }}</h2>
                    <h3 class="navigation-drawer__user-email">{{ user.email }}</h3>
                </div>
            </div>

            <ul class="navigation-drawer__list">
                <li class="navigation-drawer__item">
                    <md-button :tabindex="linkTabIndex" @click="closeMenu" class="navigation-drawer__link" to="/" exact active-class="navigation-drawer__link--active">
                        <svg-icon icon="dashboard"></svg-icon>

                        <span>Dashboard</span>
                    </md-button>
                </li>
                <li class="navigation-drawer__item">
                    <md-button :tabindex="linkTabIndex" @click="closeMenu" class="navigation-drawer__link" to="/users" exact active-class="navigation-drawer__link--active">
                        <svg-icon icon="play"></svg-icon>

                        <span>New Game</span>
                    </md-button>
                </li>
                <li class="navigation-drawer__item">
                    <md-button :tabindex="linkTabIndex" @click="closeMenu" class="navigation-drawer__link" to="/users" exact active-class="navigation-drawer__link--active">
                        <svg-icon icon="load"></svg-icon>

                        <span>Load Game</span>
                    </md-button>
                </li>
                <li class="navigation-drawer__item">
                    <md-button :tabindex="linkTabIndex" @click="closeMenu" class="navigation-drawer__link" :to="profileLink" exact active-class="navigation-drawer__link--active">
                        <svg-icon icon="profile"></svg-icon>

                        <span>Profile</span>
                    </md-button>
                </li>
                <li class="navigation-drawer__item ">
                    <md-button :tabindex="linkTabIndex" @click="closeMenu" class="navigation-drawer__link" to="/users" exact active-class="navigation-drawer__link--active">
                        <svg-icon icon="leaderboard"></svg-icon>

                        <span>Leaderboard</span>
                    </md-button>
                </li>
                <li class="navigation-drawer__item navigation-drawer__item--subheader">
                    <h2>Help &amp; Feadback</h2>
                </li>
                <li class="navigation-drawer__item">
                    <md-button :tabindex="linkTabIndex" @click="closeMenu" class="navigation-drawer__link" to="/users" exact active-class="navigation-drawer__link--active">
                        <svg-icon icon="settings"></svg-icon>

                        <span>Settings</span>
                    </md-button>
                </li>
                <li class="navigation-drawer__item">
                    <md-button :tabindex="linkTabIndex" @click="closeMenu" class="navigation-drawer__link" to="/users" exact active-class="navigation-drawer__link--active">
                        <svg-icon icon="info"></svg-icon>

                        <span>About</span>
                    </md-button>
                </li>
                <li class="navigation-drawer__item">
                    <md-button :tabindex="linkTabIndex" @click="logOut" class="navigation-drawer__link">
                        <svg-icon icon="exit"></svg-icon>

                        <span>Sign Out</span>
                    </md-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { signOut } from 'services/authService';

    import SvgIcon from 'components/SvgIcon';
    import MdButton from 'components/MdButton';

    export default {
        name: 'navigation-drawer',
        components: { MdButton, SvgIcon },
        props: {
            isOpen: Boolean
        },
        computed: {
            ...mapGetters(['user']),
            userInitials: function() {
                return this.user.name ? this.user.name[0] : '';
            },
            profileLink: function() {
                return '/users/' + this.user.id + '/profile'
            },
            linkTabIndex: function() {
                return this.isOpen ? 0 : -1;
            }
        },
        methods: {
            closeMenu(event) {
                this.$emit('close-menu', event);
            },
            logOut() {
                signOut().then(() => {
                    this.closeMenu();
                    this.$router.push('/auth');
                });
            }
        }
    }
</script>

<style lang="scss">
    @import '~assets/scss/_settings.scss';
    @import '~assets/scss/_palette.scss';
    @import '~assets/scss/_typography.scss';
    @import "~assets/scss/_media-queries";

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

        @include tablet-landscape-up {
            display: block;
            padding: 16px;
            height: 64px;
        }

        .svg-icon svg {
            vertical-align: middle;

            @include tablet-landscape-up {
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

        @include tablet-landscape-up {
            background: #fff;
            color: #333;
        }
    }

    .navigation-drawer__user {
        padding: 16px;

        @include tablet-landscape-up {
            display: none;
        }
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
        .svg-icon {
            margin-right: 28px;
            vertical-align: middle;
        }

        svg {
            fill: rgba(0, 0, 0, 0.5);
        }
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
        &:hover, &:focus {
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
