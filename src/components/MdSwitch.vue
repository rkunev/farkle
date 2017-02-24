<template>
    <label class="md-switch">
        <input type="checkbox" hidden
               :disabled="disabled"
               :checked="isChecked"
               class="md-switch__input"
               @click="toggleSwitch()">

        <span class="md-switch__handle"></span>

        <slot></slot>
    </label>
</template>

<script>
export default {
    name: 'md-switch',
    props: {
        value: { type: Boolean, default: true },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return { isChecked: !!this.value }
    },
    methods: {
        toggleSwitch() {
            this.isChecked = !this.isChecked;
            this.$emit('input', this.isChecked);
        },
    },
}
</script>

<style lang="scss">
    @import '~assets/scss/_palette';
    @import '~assets/scss/_settings';

    .md-switch {
        display: inline-block;
        -webkit-tap-highlight-color: transparent;
    }

    .md-switch__input:disabled:checked + .md-switch__handle {
        background: #DDDEDF;
    }
    .md-switch__input:disabled:checked + .md-switch__handle:before {
        background: #8E9296;
    }
    .md-switch__input:disabled + .md-switch__handle {
        cursor: not-allowed;
    }
    .md-switch__input:disabled + .md-switch__handle:active,
    .md-switch__input:disabled + .md-switch__handle:before,
    .md-switch__input:disabled + .md-switch__handle:active:before,
    .md-switch__input:disabled:checked + .md-switch__handle:active:before {
        box-shadow: none;
    }
    .md-switch__input:disabled + .md-switch__handle:before {
        background: #8E9296;
    }

    .md-switch__handle {
        float: left;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 12px;
        border-radius: 6px;
        margin-top: 2px;
        margin-right: 6px;
        background: #DDDEDF;
        transition: background $transition-duration-quick $transition-timing-function-standard;
        cursor: pointer;
    }

    .md-switch__handle:before {
        content: '';
        display: inline-block;
        margin-top: -4px;
        width: 20px;
        height: 20px;
        background: #fafafa;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2),
                    0 1px 1px 0 rgba(0, 0, 0, .14),
                    0 2px 1px -1px rgba(0, 0, 0, .12);
        border-radius: 50%;
        transition-timing-function: $transition-timing-function-standard;
        transition-duration: $transition-duration-quick;
        transition-property: transform, background, box-shadow;
        will-change: transform, background, box-shadow;
    }

    .md-switch__handle:active:before {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2),
                    0 1px 1px 0 rgba(0, 0, 0, .14),
                    0 2px 1px -1px rgba(0, 0, 0, .12),
                    0 0 0 12px rgba(128, 128, 128, 0.1);
    }

    .md-switch__input:checked + .md-switch__handle {
        background: $primary-color-light;
    }
    .md-switch__input:checked + .md-switch__handle:before {
        transform: translateX(20px);
        background: $primary-color;
    }
    .md-switch__input:checked + .md-switch__handle:active:before {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2),
                    0 1px 1px 0 rgba(0, 0, 0, .14),
                    0 2px 1px -1px rgba(0, 0, 0, .12),
                    0 0 0 12px rgba($primary-color, 0.2);
    }
</style>
