<script>
    import BaseChartjs from "./BaseChartjs";
    import {Line} from "vue-chartjs";

    export default {
        name: "ChartjsAreaStacked",
        extends: BaseChartjs,
        mixins: [Line],
        computed: {
            componentOptions () {
                return {
                    scales: {
                        xAxes: [{
                            stacked: true,
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
            },
        },
    }
</script>
