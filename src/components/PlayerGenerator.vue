<template>
    <div class="player-generator">
        <md-input v-model="playerName" :label="playerLabel" @on-submit="addPlayer()"></md-input>
        <md-button primary @click="addPlayer()">+1</md-button>
        <hr>

        <div class="player-generator__players">
            <player-card v-for="player of players" :player="player"></player-card>
        </div>
    </div>
</template>

<script>
    import MdButton from 'components/MdButton';
    import MdInput from 'components/MdInput';
    import PlayerCard from 'components/PlayerCard';

    export default {
        name: 'player-generator',
        components: { MdButton, MdInput, PlayerCard },
        data() {
            return {
                playerName: '',
                players: [
                    { name: 'Happy Plum', isRobot: true }
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
                    this.players.push(this.playerName);
                    this.playerName = '';
                }
            }
        }
    }
</script>

<style lang="scss">
    .player-generator__players {
        display: flex;
        flex-wrap: wrap;
    }
</style>
