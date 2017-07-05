<template>
    <div class="dice" :class="{ 'dice--disabled': disabled }">
        <div class="dice__row" v-for="diceRow of dice">
            <die v-for="die of diceRow" :die="die" @select="onDieSelect(die)" />
        </div>
    </div>
</template>

<script>
    import Die from 'components/Die';

    export default {
        name: 'dice',
        components: { Die },
        props: ['dice', 'disabled'],
        methods: {
            onDieSelect(die) {
                if (!this.disabled) {
                    this.$emit('select', die);
                }
            }
        }
    }
</script>

<style lang="scss">
    .dice--disabled .die__button {
        color: salmon;
    }

    .dice__row {
        display: flex;
        justify-content: center;

        > .die {
            margin: 12px;
        }
    }
</style>
