<script>
    import {HorizontalBar} from "vue-chartjs";
    import BaseChartjs from "./BaseChartjs";

    export default {
        name: "ChartjsHorizontalBar",
        extends: BaseChartjs,
        mixins: [HorizontalBar],
        props: {
            stacked: {
                default: false,
                type: Boolean,
            },
        },
        computed: {
            componentOptions() {
                let stackedOptions = {
                    scales: {
                        xAxes: [{
                            stacked: true,
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                };
                return this.stacked
                    ? stackedOptions
                    : {}
            },
        },
    }
</script>
