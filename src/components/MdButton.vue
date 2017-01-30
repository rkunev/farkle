<template>
    <button class="md-button" :type="type" :disabled="disabled" @click="ripple" v-if="!to">
        <span class="waves-effect">
            <slot></slot>
        </span>
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

            const btnType = this.$el.hasAttribute('icon')
                ? 'waves-circle'
                : '';

            if (wavesColor) {
                this.$el.firstChild.classList.add(wavesColor);
            }

            if (btnType) {
                this.$el.firstChild.classList.add(btnType);
            }

            // Waves.attach(this.$el, [wavesColor]);
            // Waves.init();
        },
        methods: {
            ripple($event) {
                const position = this.$el.hasAttribute('icon')
                    ? null
                    : { x: $event.offsetX, y: $event.offsetY };

                Waves.ripple(this.$el.firstChild, { position });

                this.$emit('click', $event);
            }
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

        &[icon] {
            > span {
                display: block;
                width: 24px;
                height: 24px;
                margin-left: auto;
                margin-right: auto;
                border-radius: 50%;
                padding: 0;
                min-width: 0;
            }
        }
    }
</style>
