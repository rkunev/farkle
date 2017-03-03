<template>
    <button v-if="!to" class="md-button"
            :type="type"
            :disabled="disabled"
            :primary="primary"
            :accent="accent"
            :icon="icon"
            @click="ripple">
        <span class="waves-effect">
            <slot></slot>
        </span>
    </button>

    <router-link v-else class="md-button"
                 :exact="exact"
                 :active-class="activeClass"
                 :to="to"
                 :primary="primary"
                 :accent="accent"
                 :icon="icon"
                 :target="target"
                 :rel="rel">
        <span class="waves-effect">
            <slot></slot>
        </span>
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
            type: { type: String, default: 'button' },
            activeClass: { type: String, default: 'router-link-active' },
            exact: Boolean,
            disabled: Boolean,
            primary: Boolean,
            accent: Boolean,
            icon: Boolean,
            noInk: Boolean,
        },
        mounted() {
            if (!this.noInk) {
                const wavesColor = (this.primary || this.accent) ? 'waves-light' : '';
                const btnType = this.icon ? 'waves-circle' : '';

                if (wavesColor) {
                    this.$el.firstChild.classList.add(wavesColor);
                }

                if (btnType) {
                    this.$el.firstChild.classList.add(btnType);
                }
            }
        },
        methods: {
            ripple(e) {
                if (!this.noInk || !this.to) {
                    Waves.ripple(this.$el.firstChild, {
                        position: !this.icon ? { x: e.offsetX, y: e.offsetY } : null
                    });
                }

                this.$emit('click', e);
            }
        },
        destroyed() {
            Waves.calm(this.$el.firstChild);
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
            > .waves-effect {
                display: block;
                width: 36px;
                min-height: 36px;
                margin-left: auto;
                margin-right: auto;
                border-radius: 50%;
                padding: 0;
                min-width: 0;

                .svg-icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-top: -12px;
                    margin-left: -12px;
                }
            }
        }
    }
</style>
