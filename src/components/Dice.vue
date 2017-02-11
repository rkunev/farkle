<template>
    <div class="dice">
        <div class="dice__row" v-for="diceRow of dice">
            <die v-for="die of diceRow" :die="die" @click="toggleChecked(die)" />
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
                    [
                        { id: 1, value: 1, checked: false },
                        { id: 2, value: 2, checked: false },
                        { id: 3, value: 3, checked: false },
                    ],
                    [
                        { id: 4, value: 4, checked: false },
                        { id: 5, value: 5, checked: false },
                        { id: 6, value: 6, checked: false },
                    ],
                ]
            }
        },
        methods: {
            toggleChecked(die) {
                die.checked = !die.checked;
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
