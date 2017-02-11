<template>
    <div class="dice">
        <div class="dice__row" v-for="diceRow of dice">
            <die v-for="die of diceRow">{{ die }}</die>
        </div>
    </div>
</template>

<script>
    import Die from 'components/Die';

    export default {
        name: 'dice',
        components: { Die },
        data() {
            return {
                dice: [
                    [1, 2, 3],
                    [4, 5, 6]
                ]
            }
        },
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
