<template>
    <div id="app">
        <h1>Vue.js + Frappe Gannt Demo</h1>
        <frappe-gantt
            :view-mode="mode"
            :tasks="tasks"
            @task-updated="debugEventLog.push($event)"
            @task-date-updated="debugEventLog.push($event)"
            @on_progress_change="debugEventLog.push($event)" />
        <h3>TODO: When the Frappe Chart component emits task changes from user clicking or dragging make sure to then update the task list passed in via prop</h3>
        <button @click="addRandomTask">
            Add
        </button>
        <div>
            <ul>
                <li
                    v-for="event in debugEventLog"
                    :key="event.id">
                    {{ event }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import FrappeGantt from './components/frappe-gantt.vue';
// const uuidv5 = require('uuid/v5');
import uuidv4 from 'uuid/v4';

export default {
    name: 'App',
    components: {
        FrappeGantt
    },
    data () {
        return {
            mode: 'week',
            tasks: [
                {
                    id: '1',
                    name: 'Hello',
                    start: '2019-01-01',
                    end: '2019-01-05',
                    progress: 10,
                },
                {
                    id: '2',
                    name: 'World',
                    start: '2019-01-05',
                    end: '2019-01-10',
                    progress: 20,
                    dependencies: '1'
                },
                {
                    id: '3',
                    name: 'From',
                    start: '2019-01-10',
                    end: '2019-01-15',
                    progress: 30,
                    dependencies: '2'
                },
                {
                    id: '4',
                    name: 'Lloyd',
                    start: '2019-01-15',
                    end: '2019-01-20',
                    progress: 40,
                    dependencies: '3'
                }
            ],
            debugEventLog: []
        };
    },
    methods: {
        addRandomTask () {
            const id = uuidv4();
            this.tasks.push({
                id: id,
                name: id,
                start: '2019-01-01',
                end: '2019-01-05',
                progress: Math.random() * 100,
            });
        }
    }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
//   text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
