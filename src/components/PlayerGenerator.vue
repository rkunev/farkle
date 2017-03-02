<template>
    <div class="player-generator">
        <div class="player-generator__form">
            <md-input v-model="playerName" :label="playerLabel" @on-submit="addPlayer()"></md-input>
            <md-button primary @click="addPlayer()">+1</md-button>

            <md-button accent>Start</md-button>
        </div>

        <div class="player-generator__players">
            <md-card v-for="player of players">
                <span slot="title">{{ player.name }}</span>
                <span slot="subtitle">{{ player.isRobot ? 'Dice Robot' : 'Human' }}</span>
                <span slot="actions">
                    <md-button class="md-card__action-button" @click="removePlayer(player)" :disabled="players.length < 2">Discard</md-button>
                    <md-button class="md-card__action-button" @click="player.isRobot = !player.isRobot">Change to human</md-button>
                </span>
            </md-card>
        </div>
    </div>
</template>

<script>
    import MdButton from 'components/MdButton';
    import MdInput from 'components/MdInput';
    import MdCard from 'components/MdCard';

    export default {
        name: 'player-generator',
        components: { MdButton, MdInput, MdCard },
        data() {
            return {
                playerName: '',
                players: [
                    { name: 'Happy Plum', isRobot: true, id: 1 }
                ]
            }
        },
        computed: {
            playerLabel: function() {
                return 'Player ' + (this.players.length + 1);
            }
        },
        methods: {
            addPlayer() {
                if (this.playerName) {
                    this.players.push({ name: this.playerName, isRobot: true, id: this.players.length + 1 });
                    this.playerName = '';
                }
            },
            removePlayer(player) {
                this.players = this.players.filter(p => p.id !== player.id)
            }
        }
    }
</script>

<style lang="scss">
    .player-generator {
        display: flex;
        flex-direction: column;
    }

    .player-generator__players {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    // @todo make a mixin for media queries
    @media screen and (min-width: 635px) {
        .player-generator__players {
            justify-content: space-around;
        }
    }

    // @todo make a mixin for media queries
    @media screen and (min-width: 1024px) {
        .player-generator__players {
            justify-content: flex-start;
        }
    }

    .player-generator__form {
        align-self: center;
        display: flex;
        align-items: baseline;
        margin-left: 20px;
        margin-right: 20px;

        > .md-input,
        > .md-button:not(:last-child) {
            margin-right: 10px;
        }

        > .md-button:last-child {
            margin-left: auto;
        }
    }
</style>
