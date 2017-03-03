<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style lang="scss" src="assets/scss/_reset.scss"></style>
<style lang="scss" src="assets/scss/fonts.scss"></style>
<style lang="scss">
    @import '~assets/scss/_palette';

    body { color: $primary-text-color }
    #app { height: 100% }
</style>
