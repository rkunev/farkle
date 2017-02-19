<template>
    <div class="game-table-page">
        <h2>{{ activePlayer.name }}</h2>

        <div class="game-table__score">
            Score: {{ activePlayer.points }}
        </div>

        <div class="game-table__controls">
            <md-button class="game-table__control-button" primary @click="roll">Roll</md-button>
            <md-button class="game-table__control-button" primary @click="endTurn">End Turn</md-button>
            <md-button :disabled="!isFirstRoll" class="game-table__control-button" accent @click="stealPoints">Piggyback</md-button>
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
        data() {
            return { isFirstRoll: true }
        },
        computed: {
            ...mapGetters({
                dice: 'diceByRows',
                activePlayer: 'playerInTurn',
            }),
            activePlayerScore() {
                return this.$store.getters.playerPoints(this.activePlayer.id);
            }
        },
        methods: {
            ...mapActions([
                'toggleDie',
                'rollUncheckedDice',
                'resetDice',
                'changeTurn',
                'addPoints',
            ]),
            handleDiceCheck({ id }) {
                this.toggleDie(id);
            },
            roll() {
                this.isFirstRoll = false;
                // @todo check if this is the first roll of the player
                this.rollUncheckedDice();
            },
            endTurn() {
                // some random points multiplier
                const mpl = [...this.dice[0], ...this.dice[1]]
                    .filter(d => d.checked)
                    .length;

                const points = mpl * 100;

                this.addPoints({ playerId: this.activePlayer.id, points });
                // this.resetDice();
                this.changeTurn();
                this.isFirstRoll = true;
            },
            stealPoints() {
                // @todo add opponent points to player's turn
                this.roll();
            }
        },
        destroyed() {
            // @todo before unloading save the game state if the game is not finished
            this.resetDice();
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
