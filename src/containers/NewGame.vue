<template>
    <div class="new-game-page">
        <h2 class="opponents-picker__title">Pick your opponent</h2>

        <div class="opponents-picker">
            <md-button to="/play/hotseat" raised class="opponents-picker__item">Hotseat</md-button>
            <md-button disabled raised class="opponents-picker__item opponents-picker__item--disabled">Online</md-button>
        </div>
    </div>
</template>

<script>
    import MdButton from 'components/MdButton';

    export default {
        name: 'new-game',
        components: { MdButton }
    }
</script>

<style lang="scss">
    @import '~assets/scss/_typography';

    .opponents-picker__title {
        @include font-display-1;
        margin-top: 10px;
        margin-bottom: 30px;
        text-align: center;
    }

    .opponents-picker {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .opponents-picker__item {
        height: auto;
        line-height: normal;
        margin: 20px;

        > .waves-effect {
            width: 144px;
            height: 144px;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            padding: 0;
        }
    }

    .opponents-picker__item--disabled {
        color: #ccc;
    }
</style>
