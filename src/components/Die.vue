<template>
    <span class="die">
        <md-button class="die__button" raised>
            <slot></slot>
        </md-button>
    </span>
</template>

<script>
    import MdButton from 'components/MdButton';

    export default {
        name: 'die',
        components: { MdButton },
    }
</script>

<style lang="scss">
    .die__button {
        $die-size: 88px;

        height: $die-size;
        line-height: $die-size;
        font-size: 32px;

        > span {
            min-width: $die-size;
        }
    }
</style>
