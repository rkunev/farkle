<template>
    <div class="robot-game-page">
        <h2 class="robots-config__title">Last one buys</h2>

        <player-generator></player-generator>
    </div>
</template>

<script>
    import MdButton from 'components/MdButton';
    import PlayerGenerator from 'components/PlayerGenerator';

    export default {
        name: 'GameHotseat',
        components: { MdButton, PlayerGenerator }
    }
</script>

<style lang="scss">
  @import '~assets/scss/_typography';

  .robots-config__title {
      @include font-display-1;
      margin-top: 10px;
      margin-bottom: 30px;
      text-align: center;
  }
</style>
