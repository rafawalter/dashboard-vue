<script>
    import {mixins} from "vue-chartjs";
    const {reactiveProp} = mixins

    export default {
        name: "BaseChartjs",
        mixins: [reactiveProp],
        props: ['options', 'title'],
        computed: {
            componentOptions () {
                return {}
            },
        },
        mounted() {
            let defaultOptions = {
                maintainAspectRatio: false,
                legend: {
                    position: 'bottom',
                    labels: {
                        fontSize: 12,
                    }
                }
            }

            if (this.title) {
                defaultOptions = {
                    ...defaultOptions,
                    title: {
                        display: true,
                        text: this.title,
                        fontSize: 16,
                    },
                }
            }

            let finalOptions = {
                ...defaultOptions,
                ...this.componentOptions,
                ...this.options,
            }
            console.debug(finalOptions)

            this.renderChart(this.chartData, finalOptions)
        },
    }
</script>

<style scoped>
    canvas.chartjs-render-monitor {
        /* fixes bug when reducing width */
        width: 100% !important;
        height: 100%;
    }
</style>
