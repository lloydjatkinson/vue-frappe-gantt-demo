<template>
    <div>
        <svg ref="gantt" />
    </div>
</template>

<script>
import Gantt from 'frappe-gantt';

export default {
    name: 'FrappeGantt',
    props: {
        viewMode: {
            type: String,
            required: false,
            default: 'Month'
        },
        tasks: {
            type: Array,
            required: true,
            default: []
        }
    },
    data () {
        return {
            gantt: {},
        };
    },
    watch: {
        viewMode () {
            this.updateViewMode();
        },

        tasks () {
            this.updateTasks();
        }
    },
    mounted () {
        this.setupGanttChart();
    },
    methods: {
        setupGanttChart () {
            this.gantt = new Gantt(this.$refs.gantt, this.tasks, {
                on_click: task => {
                    this.$emit('task-updated', task);
                },

                on_date_change: (task, start, end) => {
                    this.$emit('task-date-updated', { task, start, end });
                },

                on_progress_change: (task, progress) => {
                    this.$emit('task-progress-updated', { task, progress });
                },

                //I doubt you will ever need this as the developer already knows what view mode they set.
                on_view_change: (mode) => {
                    this.$emit('view-mode-updated', mode);
                }
            });

            this.updateTasks();
            this.updateViewMode();
        },

        updateViewMode () {
            this.gantt.change_view_mode(this.viewMode[0].toUpperCase() + this.viewMode.substring(1));
        },

        updateTasks () {
            this.gantt.refresh(this.tasks);
        }
    }
};
</script>

<style lang="scss">
@import "~frappe-gantt/dist/frappe-gantt.css";
</style>