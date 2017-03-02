<template>
    <div class="md-card">
        <div class="md-card__info">
            <div class="md-card__header">
                <div class="md-card__name"><slot name="title"></slot></div>
                <div class="md-card__type"><slot name="subtitle"></slot></div>
            </div>
        </div>

        <div class="md-card__actions">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'md-card',
    }
</script>

<style lang="scss">
    @import '~assets/scss/_palette';
    @import '~assets/scss/_shadows';
    @import '~assets/scss/_typography';

    .md-card__info {
        display: flex;
    }

    .md-card__avatar {
        margin-left: auto;
        margin-right: 8px;

        img {
            vertical-align: top;
        }
    }

    .md-card {
        background: #fff;
        @include shadow(2);
        padding: 16px 8px 8px;
        margin: 8px 20px;
        border-radius: 4px;
        width: 100%;
        min-height: 150px;
        display: flex;
        flex-direction: column;
    }

    // @todo make a mixin for media queries
    @media screen and (min-width: 420px) {
        .md-card {
            width: auto;
        }
    }

    .md-card__actions {
        margin-top: auto;
        padding-top: 8px;
        display: flex;
    }

    .md-card__action-button {
        margin-right: 8px;

        &:last-child {
            margin-right: 0;
        }
    }

    .md-card__header {
        margin: 8px 0 0 8px;
    }

    .md-card__name {
        @include font-headline;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .md-card__type {
        @include font-body-1;
        color: rgba(0, 0, 0, .54);
    }
</style>
