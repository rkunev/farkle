<template>
    <div class="dashboard-page">
        <h2 class="dashboard-page__title">Hey {{ user.name }}!</h2>

        <div class="dashboard-page__quick-start">
            <div class="dashboard-page__quick-start-item">
                <md-button class="dashboard-page__quick-start-link" to="/play/new" accent>New Game</md-button>
            </div>

            <div class="dashboard-page__quick-start-item">
                <md-button class="dashboard-page__quick-start-link" to="/play/hotseat/1234567" primary>Load Last Game</md-button>
            </div>

            <div class="dashboard-page__quick-start-item">
                <md-button class="dashboard-page__quick-start-link" primary>Leaderboard</md-button>
            </div>
        </div>

        <h3 class="dashboard-page__title">Recent Activity</h3>
        smth.. smth..
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { isOffline } from 'services/offlineService';

    import MdButton from 'components/MdButton';

    export default {
        name: 'dashboard',
        components: { MdButton },
        data() {
            return {
                isUserOffline: isOffline(),
            }
        },
        computed: {
            ...mapGetters(['user']),
        },
    };
</script>

<style lang="scss">
    @import '~assets/scss/_typography';

    .dashboard-page {
        text-align: center;
    }

    .dashboard-page__title {
        @include font-display-1;
        margin-top: 10px;
        margin-bottom: 30px;
    }

    .dashboard-page__quick-start {
        display: flex;
        flex-direction: column;
    }

    .dashboard-page__quick-start-item {
        margin-bottom: 24px;
    }

    .dashboard-page__quick-start-link {
        display: inline-block;
        width: 50%;
    }
</style>
