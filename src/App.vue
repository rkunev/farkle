<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import Hello from './components/Hello';
import LoginContainer from './containers/LoginContainer';

export default {
    name: 'app',
    components: {
        Hello,
        LoginContainer
    }
}
</script>

<style lang="scss" src="./assets/scss/_reset.scss"></style>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
