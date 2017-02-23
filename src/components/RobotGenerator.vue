<template>
    <div>
        <md-input v-model="robotName" :label="robotLabel" @on-submit="addRobot()"></md-input>
        <md-button primary @click="addRobot()">+1</md-button>
        <hr>
        <div class="robots" v-for="robot of robots">
            {{ robot }}
        </div>
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
                robotName: '',
                robots: [
                    'Happy Plum'
                ]
            }
        },
        computed: {
            robotLabel: function() {
                return 'Robot ' + (this.robots.length + 1);
            }
        },
        methods: {
            addRobot() {
                if (this.robotName) {
                    this.robots.push(this.robotName);
                    this.robotName = '';
                }
            }
        }
    }
</script>
