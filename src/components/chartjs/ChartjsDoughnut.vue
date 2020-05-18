<script>
    import {Doughnut, mixins} from "vue-chartjs";
    const {reactiveProp} = mixins

    export default {
        name: "ChartjsDoughnut",
        extends: Doughnut,
        mixins: [reactiveProp],
        props: ['options'],
        mounted() {
            let defaultOptions = {
                maintainAspectRatio: false,
                legend: {
                    position: 'bottom',
                    labels: {
                        fontSize: 12,
                    }
                },

            }

            let finalOptions = {
                ...defaultOptions,
                ...this.options,
            }

            this.renderChart(this.chartData, finalOptions)

        }
    }
</script>

<style scoped>
    canvas.chartjs-render-monitor {
        /* fixes bug when reducing width */
        width: 100% !important;
        height: 100%;
    }
</style>
