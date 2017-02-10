<template>
    <div>
        <md-input v-model="robotName" :label="label" :id="id"></md-input>
        <md-button primary>+1</md-button>
    </div>
</template>

<script>
    import MdButton from 'components/MdButton';
    import MdInput from 'components/MdInput';

    export default {
        name: 'robot-generator',
        components: { MdButton, MdInput },
        data() {
            return {
                robotName: 'Happy Plum',
                label: 'Robot 1',
                id: 'robot-1',
            }
        },
        watch: {
            robotName: function(value) {
                console.log(value);
            }
        }
    }
</script>
