<template>
    <div class="users-page">
        Users
        <p>
            <router-link to="/">Home</router-link>
        </p>
    </div>
</template>

<script>
    import { getUserById } from 'services/userService';

    export default {
        name: 'user',
        data() {
            return {
                user: {}
            }
        },
        created() {
            // @todo add loading spinner and show empty state if no data is available
            getUserById(this.$route.params.userId)
                .then(user => this.user = user)
                .catch(e => console.error(e));
        }
    };
</script>
