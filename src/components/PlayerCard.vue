<template>
    <div class="player-card">
        <div class="player-card__avatar">
            <img src="http://placekitten.com/144/144" width="144">
            <div class="player-card__name" :style="{ 'color': playerColor }">{{ player.name }}</div>
        </div>

        <div class="player-card__toolbar">
            <input type="checkbox" id="player-type" v-model="player.isRobot">
            <label for="player-type">{{ playerType }}</label>
            <svg-icon icon="delete" />
        </div>
    </div>
</template>

<script>
    import SvgIcon from 'components/SvgIcon';

    export default {
        name: 'player-card',
        props: ['player'],
        components: { SvgIcon },
        computed: {
            playerColor: function() {
                return this.player.isRobot ? 'white' : 'gold';
            },
            playerType: function() {
                return this.player.isRobot ? 'Robot' : 'Human';
            }
        }
    }
</script>

<style lang="scss">
    @import '~assets/scss/_palette';

    .player-card {
        margin: 20px;
        width: 144px;
        display: flex;
        flex-direction: column;
        padding: 0;
        border: 1px solid $divider-color;
        border-radius: 4px;
    }

    .player-card__avatar {
        position: relative;
        display: flex;
    }

    .player-card__name {
        align-self: flex-start;
        position: absolute;
        bottom: 0;
        padding: 24px 16px 16px;
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 30%, rgba(254, 254, 254, 0) 100%);
        width: 100%;
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .player-card__toolbar {
        padding: 10px;
        width: 100%;
        display: flex;

        .svg-icon {
            margin-left: auto;
        }
    }
</style>
