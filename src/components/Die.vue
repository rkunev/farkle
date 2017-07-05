<template>
    <span class="die">
        <md-button class="die__button" no-ink :class="{ 'selected': die.isSelected }" @click="emit">
            {{ die.value }}
        </md-button>
    </span>
</template>

<script>
    import MdButton from 'components/MdButton';

    export default {
        name: 'die',
        components: { MdButton },
        props: ['die'],
        methods: {
            emit() {
                this.$emit('select', this.die);
            }
        }
    }
</script>

<style lang="scss">
    @import '~assets/scss/_shadows';
    @import '~assets/scss/_settings';

    .die__button {
        $die-size: 88px;

        height: $die-size;
        line-height: $die-size;
        font-size: 32px;

        user-select: none;
        @include shadow(6);

        transition-property: box-shadow, background-color;
        transition-duration: $transition-duration-quick;
        transition-timing-function: $transition-timing-function-deceleration;

        &.selected {
            background-color: rgba(153, 153, 153, .2);
            @include shadow(2);
        }

        > span {
            min-width: $die-size;
        }
    }
</style>
