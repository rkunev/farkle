<template>
    <div class="player-generator">
        <div class="player-generator__form">
            <md-input class="player-generator__new-player-input" v-model="playerName" :label="playerLabel" @on-submit="addPlayer()"></md-input>
            <md-button class="player-generator__create-player" primary @click="addPlayer()">+1</md-button>

            <md-button class="player-generator__start" accent>Start</md-button>
        </div>

        <transition-group name="player-generator__players" tag="div" class="player-generator__players">
            <md-card v-for="player of players" :key="player.id" class="player-generator__player">
                <span slot="title">{{ player.name }}</span>
                <span slot="subtitle">{{ player.isRobot ? 'Dice Robot' : 'Human' }}</span>
                <span slot="actions">
                    <md-button class="md-card__action-button" @click="removePlayer(player)" :disabled="players.length < 2">Discard</md-button>
                    <md-button class="md-card__action-button" @click="player.isRobot = !player.isRobot">Change to human</md-button>
                </span>
            </md-card>
        </transition-group>
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
                    { name: 'Happy Plum 1', isRobot: true, id: 1 },
                    { name: 'Happy Plum 2', isRobot: true, id: 2 },
                    { name: 'Happy Plum 3', isRobot: true, id: 3 },
                    { name: 'Happy Plum 4', isRobot: true, id: 4 },
                    { name: 'Happy Plum 5', isRobot: true, id: 5 },
                    { name: 'Happy Plum 6', isRobot: true, id: 6 },
                    { name: 'Happy Plum 7', isRobot: true, id: 7 },
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
        position: relative;
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

    .player-generator__player {
        transition: transform 0.3s;
    }

    .player-generator__players-enter {
        transform: scale(0);
    }
    .player-generator__players-leave-to {
        opacity: 0;
    }
    .player-generator__players-leave-active {
        position: absolute;
    }

    .player-generator__form {
        align-self: center;
        display: flex;
        align-items: baseline;
        margin-left: 20px;
        margin-right: 20px;
    }

    .player-generator__new-player-input,
    .player-generator__create-player {
        margin-right: 10px;
    }

    .player-generator__start {
        margin-left: auto;
    }
</style>
