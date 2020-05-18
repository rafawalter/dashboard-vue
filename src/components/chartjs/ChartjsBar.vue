<script>
    import {Bar} from "vue-chartjs";
    import BaseChartjs from "./BaseChartjs";

    export default {
        name: "ChartjsBar",
        extends: BaseChartjs,
        mixins: [Bar],
    }
</script>

