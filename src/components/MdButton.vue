<template>
  <button class="md-button" :type="type" :disabled="disabled" @click="$emit('click', $event)" v-if="!to">
    <slot></slot>
  </button>

  <router-link class="md-button waves-effect" :exact="exact" :active-class="activeClass" :to="to" :disabled="disabled" :target="target" :rel="rel" @click.native="$emit('click', $event)" v-else>
    <slot></slot>
  </router-link>
</template>

<script>
    import wavesCss from 'assets/scss/waves.scss';
    import Waves from 'node-waves/src/js/waves.js';

    export default {
        name: 'md-button',
        props: {
            to: String,
            target: String,
            rel: String,
            type: {
                type: String,
                default: 'button'
            },
            activeClass: {
                type: String,
                default: 'router-link-active'
            },
            exact: Boolean,
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

<style lang="scss">
    @import '~assets/scss/_buttons.scss';

    .md-button {
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
