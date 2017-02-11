<template>
    <div class="game-table-page">
        <h2>Player turn: Offline</h2>

        <div class="game-table">
            <div class="game-table__dice">
                <div class="game-table__dice-row">
                    <div class="game-table__die">
                        <md-button raised>1</md-button>
                    </div>
                    <div class="game-table__die">
                        <md-button raised>2</md-button>
                    </div>
                    <div class="game-table__die">
                        <md-button raised>3</md-button>
                    </div>
                </div>

                <div class="game-table__dice-row">
                    <div class="game-table__die">
                        <md-button raised>4</md-button>
                    </div>
                    <div class="game-table__die">
                        <md-button raised>5</md-button>
                    </div>
                    <div class="game-table__die">
                        <md-button raised>6</md-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MdButton from 'components/MdButton';

    export default {
        name: 'load-game',
        components: { MdButton },
        mounted() {
            console.log(this.$route.params.gameId)
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

    .game-table {
        margin-top: auto;
    }

    .game-table__dice,
    .game-table__score {
        text-align: center;
    }

    .game-table__dice-row {
        display: flex;
        justify-content: center;
    }

    .game-table__dice {
        .md-button {
            height: 88px;
            line-height: 88px;
            font-size: 32px;
        }
        .md-button > span {
            min-width: 88px;
        }
    }

    .game-table__die {
        margin: 12px;
    }

    .game-table__score {
    }
</style>
