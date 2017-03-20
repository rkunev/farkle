<template>
    <div class="player-generator">
        <div class="player-generator__form">
            <md-input class="player-generator__new-player-input"
                      v-model="playerName"
                      :label="playerLabel"
                      @on-submit="addPlayer()">
            </md-input>

            <md-button class="player-generator__create-player" primary @click="addPlayer()">+1</md-button>
            <md-button class="player-generator__start" accent>Start</md-button>
        </div>

        <transition-group name="player-generator__players" tag="div" class="player-generator__players">
            <md-card v-for="player of players" :key="player.id" class="player-generator__player">
                <template slot="title">{{ player.name }}</template>

                <template slot="subtitle">{{ player.isRobot ? 'Dice Robot' : 'Human' }}</template>

                <template slot="actions">
                    <md-button class="md-card__action-button"
                               @click="togglePlayerType(player)">
                       Change to {{ player.isRobot ? 'Human' : 'Robot' }}
                    </md-button>

                    <md-button class="md-card__action-button"
                               no-ink
                               icon
                               @click="removePlayer(player)"
                               :disabled="players.length < 2">
                        <svg-icon icon="delete"></svg-icon>
                    </md-button>
                </template>
            </md-card>
        </transition-group>
    </div>
</template>

<script>
    import MdButton from 'components/MdButton';
    import MdInput from 'components/MdInput';
    import MdCard from 'components/MdCard';
    import SvgIcon from 'components/SvgIcon';

    export default {
        name: 'player-generator',
        components: { MdButton, MdInput, MdCard, SvgIcon },
        data() {
            return {
                playerName: '',
                players: [
                    { name: 'Happy Plum 1', isRobot: true, id: 1 },
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
            },
            togglePlayerType(player) {
                player.isRobot = !player.isRobot;
            }
        }
    }
</script>

<style lang="scss">
    @import "~assets/scss/_media-queries";

    .player-generator {
        display: flex;
        flex-direction: column;
    }

    .player-generator__players {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-self: center;
        width: 100%;
        max-width: 552px; // 2 cards per row

        @include tablet-landscape-up {
            max-width: 828px; // 3 cards per row
        }

        @include desktop-up {
            max-width: 1104px; // 4 cards per row
        }
    }

    .player-generator__player {
        min-width: 260px;
        transition: transform 0.3s;
    }

    .player-generator__player .md-card__action-button:first-child {
        min-width: 164px; // equalize "Change To <type>" width
    }

    .player-generator__player .md-card__action-button:last-child {
        margin-left: auto;
        svg { fill: crimson }
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
