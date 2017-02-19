<template>
    <div class="game-table-page">
        <h2>{{ activePlayer.name }}</h2>

        <div class="game-table__score">
            Score: {{ activePlayer.points }}
            <br>
            Turn score: {{ turnScore }}
            Roll score: {{ rollScore }}
        </div>

        <div class="game-table__controls">
            <md-button class="game-table__control-button" primary @click="roll">Roll</md-button>
            <md-button class="game-table__control-button" :disabled="turnScore < 300" primary @click="endTurn">End Turn</md-button>
<!--             <md-button class="game-table__control-button" :disabled="!isFirstRoll || !turnScore" accent @click="stealPoints">Piggyback</md-button> -->
        </div>

        <dice :disabled="disabledDice" :dice="dice" @checked="handleDiceCheck" class="game-table__dice"></dice>
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
            return {
                disabledDice: true,
                isFirstRoll: true,
                canEndTurn: false,
                turnScore: 0,
                rollScore: 0,
            }
        },
        computed: {
            ...mapGetters({
                dice: 'diceByRows',
                activePlayer: 'playerInTurn',
            })
        },
        methods: {
            ...mapActions([
                'toggleDie',
                'rollUncheckedDice',
                'resetDice',
                'rollAllDice',
                'changeTurn',
                'addPoints',
            ]),
            handleDiceCheck(die) {
                this.toggleDie(die.id);
                this.turnScore = calculateCheckedDicePoints([...this.dice[0], ...this.dice[1]]);
                this.canEndTurn = this.turnScore >= 300;
            },
            roll() {
                if (this.isFirstRoll) {
                    this.turnScore = 0;
                    this.rollAllDice();
                } else {
                    this.rollUncheckedDice();
                }

                this.isFirstRoll = false;
                this.rollScore = calculateUncheckedDicePoints([...this.dice[0], ...this.dice[1]]);

                if (this.rollScore === 0) {
                    this.endTurn();
                } else {
                    this.canEndTurn = this.turnScore >= 300; // this can be computed
                    this.disabledDice = false;
                }
            },
            endTurn() {
                this.canEndTurn = false;
                this.isFirstRoll = true;
                this.addPoints({ playerId: this.activePlayer.id, points: this.turnScore });
                this.changeTurn();
                this.roll();
            },
            // @fixme Logic is FUBAR
            stealPoints() {
                this.disabledDice = false;
                this.isPiggybacking = true;
                this.canEndTurn = false;
                this.roll();
            }
        },
        destroyed() {
            // @todo before unloading save the game state if the game is not finished
            this.resetDice();
        }
    }

    function calculateCheckedDicePoints(dice) {
        return dice
            .filter(d => d.checked)
            .filter(d => (d.value === 5 || d.value === 1))
            .map(d => d.value === 1 ? 100 : 50)
            .reduce((acc, next) => acc + next, 0);
    }

    function calculateUncheckedDicePoints(dice) {
        return dice
            .filter(d => !d.checked)
            .filter(d => (d.value === 5 || d.value === 1))
            .map(d => d.value === 1 ? 100 : 50)
            .reduce((acc, next) => acc + next, 0);
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
