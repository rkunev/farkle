<template>
    <div class="game-table-page">
        <div class="game-table__score">
            Score: {{ playerInTurn.points }}
            <br>
            Turn score: {{ turnPoints }}
            <br>
            selectedDicePoints: {{ selectedDicePoints }}
            <br>
            rolledDicePoints: {{ rolledDicePoints }}
        </div>

        <div class="game-table__controls">
            <md-button class="game-table__control-button"
                       primary
                       :disabled="!canRoll"
                       @click="roll()">
                Roll
            </md-button>

            <md-button class="game-table__control-button"
                       primary
                       :disabled="!canEndTurn"
                       @click="endTurn()">
                End Turn
            </md-button>

            <md-button class="game-table__control-button"
                       accent
                       :disabled="!canPiggyback"
                       @click="stealPoints()">Piggyback</md-button>
        </div>

        <dice :disabled="areDiceDisabled" :dice="dice" @select="handleDiceSelect" class="game-table__dice"></dice>
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
                isFirstRoll: true,
                areDiceDisabled: true,
                turnPoints: 0, // B
                canRoll: true, // E
                canEndTurn: false, // F
                canPiggyback: false, // G
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                // redirect to new game if there are no players in Vuex store
            });
        },
        computed: {
            ...mapGetters({
                dice: 'diceByRows',
                unSavedDice: 'unSavedDice',
                selectedDicePoints: 'selectedDicePoints', // C
                rolledDicePoints: 'rolledDicePoints', // D
                playerInTurn: 'playerInTurn',
                lastSavedScore: 'lastSavedScore',
                playerHasZilched: 'playerHasZilched',
            })
        },
        methods: {
            ...mapActions([
                'toggleDie',
                'rollAllDice',
                'rollFreeDice',
                'lockAllDice',
                'saveSelectedDice',
                'changeTurn',
                'addPoints',
                'saveAllDice',
                'unlockUnselectedDice',
            ]),
            handleDiceSelect(die) {
                this.toggleDie(die.id);
                this.canRoll = this.selectedDicePoints > 0;
                this.canEndTurn = (this.turnPoints + this.selectedDicePoints) >= 300;
            },
            roll() {
                this.turnPoints += this.selectedDicePoints;

                if (!this.isFirstRoll) {
                    this.saveSelectedDice();
                }


                if (!this.unSavedDice.length) {
                    this.rollAllDice();
                } else {
                    this.rollFreeDice();
                }

                this.canRoll = this.isFirstRoll = this.areDiceDisabled = this.canPiggyback = false;

                if (!this.rolledDicePoints) {
                    this.turnPoints = 0;
                    this.addPoints({ playerId: this.playerInTurn.id, points: 0 });

                    const hasPenalty = this.playerHasZilched(this.playerInTurn.id);

                    if (hasPenalty) {
                        this.addPoints({ playerId: this.playerInTurn.id, points: -500 });
                    }

                    this.canRoll = this.canEndTurn = false;

                    this.rollAllDice();
                    this.changeTurn();
                }
            },
            endTurn() {
                this.addPoints({
                    playerId: this.playerInTurn.id,
                    points: this.turnPoints + this.selectedDicePoints
                });
                this.turnPoints = 0;
                this.canEndTurn = false;
                this.canPiggyback = this.isFirstRoll = true;
                this.saveAllDice();

                if (this.playerInTurn.points > 10000) {
                    // 1. Save the first player that reaches target
                    // 2. Check who's next in turn,
                    //   2.1. If it's the same saved player check if other players have the same amount of points
                    //     2.1.1. If there are players with the same amount of points - disable the other players (the losers)
                    //     2.1.1.1. Remove the saved player
                    //     2.1.2. Else - we have a winner
                    //   2.2. Else - there are players that can still roll... proceed as usual
                    console.log('Winner is', this.playerInTurn.name)
                }

                this.changeTurn();
            },
            stealPoints() {
                this.turnPoints = this.lastSavedScore;
                this.canRoll = true;
                this.canPiggyback = false;
                this.unlockUnselectedDice();
                this.roll();
            }
        },
        destroyed() {
            // @todo before unloading save the game state if the game is not finished
            this.rollAllDice();
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
