<template>
    <div class="robot-game-page">
        <h2 class="robots-config__title">Get them robots</h2>

        <robot-generator></robot-generator>
    </div>
</template>

<script>
    import MdButton from 'components/MdButton';
    import RobotGenerator from 'components/RobotGenerator';

    export default {
        name: 'GameRobot',
        components: { MdButton, RobotGenerator }
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
