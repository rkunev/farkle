<template>
    <div class="dice">
        <div class="dice__row" v-for="diceRow of dice">
            <die v-for="die of diceRow" :die="die" @checked="onDieCheck(die)" />
        </div>
    </div>
</template>

<script>
    import Die from 'components/Die';

    export default {
        name: 'dice',
        components: { Die },
        props: ['dice'],
        methods: {
            onDieCheck(die) {
                this.$emit('checked', die);
            }
        }
    }
</script>

<style lang="scss">
    .dice__row {
        display: flex;
        justify-content: center;

        > .die {
            margin: 12px;
        }
    }
</style>
