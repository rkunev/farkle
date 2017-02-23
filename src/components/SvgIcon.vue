<template>
    <span class="svg-icon" v-html="svg" v-once></span>
</template>

<script>
    const ICONS = {
        dice:        require('assets/svg/dice.svg'),
        dashboard:   require('assets/svg/dashboard.svg'),
        menu:        require('assets/svg/menu.svg'),
        play:        require('assets/svg/play.svg'),
        load:        require('assets/svg/load.svg'),
        profile:     require('assets/svg/profile.svg'),
        leaderboard: require('assets/svg/leaderboard.svg'),
        settings:    require('assets/svg/settings.svg'),
        info:        require('assets/svg/info.svg'),
        exit:        require('assets/svg/exit.svg'),
        more:        require('assets/svg/more.svg'),
    };

    export default {
        name: 'svg-icon',
        props: {
            icon: {
                type: String,
                required: true,
                validator: icon => icon in ICONS,
            }
        },
        data() {
            return {
                svg: ICONS[this.icon]
            }
        },
    }
</script>

<style lang="scss">
    .svg-icon {
        display: inline-block;
        width: 24px;
        height: 24px;

        svg { vertical-align: top; }
    }
</style>
