<template>
  <button class="md-button" :type="type" :disabled="disabled" @click="$emit('click', $event)" v-if="!href">
    <slot></slot>
  </button>

  <a class="md-button" :href="href" :disabled="disabled" :target="target" :rel="rel" @click="$emit('click', $event)" v-else>
    <slot></slot>
  </a>
</template>

<script>
    import wavesCss from 'assets/scss/waves.scss';
    import Waves from 'node-waves/src/js/waves.js';

    export default {
        name: 'md-button',
        props: {
            href: String,
            target: String,
            rel: String,
            type: {
                type: String,
                default: 'button'
            },
            disabled: Boolean
        },
        mounted() {
            const wavesColor = (this.$el.hasAttribute('primary') || this.$el.hasAttribute('accent'))
                ? 'waves-light'
                : '';

            Waves.attach(this.$el, wavesColor);
            Waves.init();
        }
    };
</script>

<style lang="scss" scoped>
    @import '~assets/scss/_buttons.scss';

    button {
        @include button;

        &[raised] {
            @include button-raised;
        }

        &[primary] {
            @include button-primary;
        }

        &[primary-inverted] {
            @include button-primary-inverted;
        }

        &[accent] {
            @include button-accent;
        }
    }
</style>
