<template>
    <span class="md-input" :class="{ 'active': value.length || placeholder.length }">
        <input class="md-input__input"
               type="text"
               :id="id"
               :disabled="disabled"
               :readonly="readonly"
               :value="value"
               :placeholder="placeholder"
               @input="updateValue($event.target.value)">

        <label class="md-input__label" :for="id">{{ label }}</label>

        <span class="md-input__focus-underline"></span>
    </span>
</template>

<script>
    export default {
        name: 'md-input',
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
            }
        }
    }
</script>

<style lang="scss">
    // @todo Align with specs at https://material.io/guidelines/components/text-fields.html#text-fields-labels
    @import '~assets/scss/_palette';

    @mixin md-input__label--float {
        font-size: .8em;
        transform: translateY(-210%);
    }

    .md-input {
        display: inline-block;
        position: relative;
        margin-top: 1em;
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

        &:disabled {
            cursor: not-allowed;

            ~ .md-input__label { cursor: not-allowed }
        }

        &:disabled,
        &[readonly] {
            color: rgba(0,0,0,0.26);
            border-bottom: 1px dotted rgba(0,0,0,0.26);

            ~ .md-input__label { color: rgba(0,0,0,0.26) }
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

        &::-webkit-input-placeholder { color: #d1d1d1 }
        &:-moz-placeholder           { color: #d1d1d1 }
        &::-moz-placeholder          { color: #d1d1d1 }
        &:-ms-input-placeholder      { color: #d1d1d1 }
    }

    .md-input__label {
        color: $divider-color;
        position: absolute;
        top: 0.5rem;
        left: 0;
        font-size: 1rem;
        cursor: text;
        transition: transform .2s ease-out, font .2s ease-out;
    }

    .md-input.active .md-input__label  {
        @include md-input__label--float;
    }

    .md-input__focus-underline {
        width: 100%;
        position: absolute;
        bottom: 0;
        border-bottom: 2px solid $primary-color;
        transform: scale3d(0,1,1);
    }
</style>
