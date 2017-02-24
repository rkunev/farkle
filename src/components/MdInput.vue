<template>
    <span class="md-input" :class="{ 'active': value.length || placeholder.length }">
        <input class="md-input__input"
               type="text"
               :id="uid"
               :disabled="disabled"
               :readonly="readonly"
               :value="value"
               :placeholder="placeholder"
               @keyup.13="onSubmit($event.target.value)"
               @input="updateValue($event.target.value)">

        <label class="md-input__label" :for="uid">{{ label }}</label>

        <span class="md-input__focus-underline"></span>
    </span>
</template>

<script>
    export default {
        name: 'md-input',
        data() {
            return {
                uid: 'md-input-' + (this.id || Math.random() * 10000 | 0)
            }
        },
        props: {
            value: { type: String, default: '' },
            label: { type: String, default: '' },
            id: { type: String, default: '' },
            placeholder: { type: String, default: '' },
            disabled: { type: Boolean, default: false },
            readonly: { type: Boolean, default: false },
        },
        methods: {
            updateValue(value) {
                this.$emit('input', value);
            },
            onSubmit(value) {
                this.$emit('on-submit', value);
            }
        }
    }
</script>

<style lang="scss">
    @import '~assets/scss/_palette';
    @import '~assets/scss/_settings';
    @import '~assets/scss/_typography';

    @mixin md-input__label--float {
        user-select: auto;
        font-size: .75em;
        transform: translateY(-130%);
    }

    .md-input {
        display: inline-block;
        position: relative;
        margin-top: 2em;
        margin-bottom: .5em;
    }

    .md-input__input {
        background-color: transparent;
        border: 0;
        border-bottom: 1px solid $divider-color;
        outline: none;
        height: 2em;
        width: 100%;
        font-size: 1em;
        margin: 0;
        padding: 0;
        caret-color: $primary-color; // FF 53 and Chrome 58
        color: $primary-color;
        text-shadow: 0px 0px 0px rgba(0, 0, 0, .87);
        -webkit-text-fill-color: transparent;

        &:disabled {
            cursor: not-allowed;

            ~ .md-input__label { cursor: not-allowed }
        }

        &:disabled,
        &[readonly] {
            color: rgba(0, 0, 0, .38);
            border-bottom: 1px dotted rgba(0, 0, 0, .38);

            ~ .md-input__label { color: rgba(0, 0, 0, .38) }
        }

        &:focus:not([readonly]) {
            ~ .md-input__label {
                @include md-input__label--float;
                color: $primary-color;
            }

            ~ .md-input__focus-underline {
                transform: none;
                transition: transform .2s;
            }
        }

        &::-webkit-input-placeholder { color: rgba(0, 0, 0, .38); text-shadow: none; -webkit-text-fill-color: initial; }
        &:-moz-placeholder           { color: rgba(0, 0, 0, .38); text-shadow: none; -webkit-text-fill-color: initial; }
        &::-moz-placeholder          { color: rgba(0, 0, 0, .38); text-shadow: none; -webkit-text-fill-color: initial; }
        &:-ms-input-placeholder      { color: rgba(0, 0, 0, .38); text-shadow: none; -webkit-text-fill-color: initial; }
    }

    .md-input__label {
        color: rgba(0, 0, 0, .38);
        position: absolute;
        top: 0.5em;
        left: 0;
        font-size: $subheading-size;
        cursor: text;
        transition-property: transform, font, color;
        transition-duration: .2s;
        transition-timing-function: $transition-timing-function-standard;
        user-select: none;
    }

    .md-input.active .md-input__label {
        @include md-input__label--float;
    }

    .md-input:hover .md-input__input:not([disabled]):not([readonly]):not(:focus) ~ .md-input__label {
        color: rgba(0, 0, 0, .54);
    }

    .md-input__focus-underline {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        border-bottom: 2px solid $primary-color;
        transform: scale3d(0, 1, 1);
        will-change: transform;
    }
</style>
