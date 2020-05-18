<script>
    import {Doughnut} from "vue-chartjs";
    import BaseChartjs from "./BaseChartjs";

    export default {
        name: "ChartjsDoughnut",
        extends: BaseChartjs,
        mixins: [Doughnut],
    }
</script>
