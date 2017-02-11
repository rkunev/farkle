<template>
    <div class="game-table-page">
        <h2>Player turn: Offline</h2>

        <div class="game-table__score">Score Sheet</div>

        <dice class="game-table__dice"></dice>
    </div>
</template>

<script>
    import Dice from 'components/Dice';

    export default {
        name: 'load-game',
        components: { Dice },
    }
</script>

<style lang="scss">
    .game-table-page {
        // stretch to fill the whole page
        flex: 1 1 auto;

        // allow children to be position to the bottom
        display: flex;
        flex-direction: column;
    }

    .game-table__dice {
        margin-top: auto;
        margin-bottom: 12px;
    }

    .game-table__score {
        margin: auto;
    }
</style>
