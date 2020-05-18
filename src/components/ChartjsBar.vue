<script>
    import {Bar, mixins} from "vue-chartjs";
    const {reactiveProp} = mixins

    export default {
        name: "ChartjsBar",
        extends: Bar,
        mixins: [reactiveProp],
        props: ['options'],
        mounted() {
            this.renderChart(this.chartData, this.options)
        }
    }
</script>

<style scoped>

</style>
