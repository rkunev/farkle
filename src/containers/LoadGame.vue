<template>
    <div class="game-table-page">
        <h2>Player turn: Offline</h2>

        <div class="game-table__score">Score Sheet</div>

        <div class="game-table__controls">
            <md-button class="game-table__control-button" primary>Roll</md-button>
            <md-button class="game-table__control-button" primary>End Turn</md-button>
            <md-button class="game-table__control-button" accent>Piggyback</md-button>
        </div>

        <dice :dice="dice" @checked="handleDiceCheck" class="game-table__dice"></dice>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    import Dice from 'components/Dice';
    import MdButton from 'components/MdButton';

    export default {
        name: 'load-game',
        components: { Dice, MdButton },
        computed: {
            ...mapGetters({ dice: 'diceByRows' })
        },
        methods: {
            ...mapActions(['toggleDie']),
            handleDiceCheck(die) {
                this.toggleDie(die.id);
            }
        }
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

    .game-table__score {
        margin: auto;
    }

    .game-table__controls {
        display: flex;
        justify-content: center;
    }

    .game-table__control-button {
        margin: 12px;
    }

    .game-table__dice {
        margin-bottom: 12px;
    }

</style>
