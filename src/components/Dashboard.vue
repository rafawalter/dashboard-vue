<template>
    <div>
        <h1>Dashboard</h1>
        <div class="dashboard">
            <h2>Chartjs</h2>
            <CardFlexbox
                min-width="300px"
            >
                <ChartjsHorizontalBar
                        title="Horizontal Bar"
                        :chartData="barChartData"
                        :stacked="false"
                />
                <ChartjsDoughnut
                        title="Doughnut"
                        :chartData="pieChartData"
                />
                <ChartjsAreaStacked
                        title="Stacked Area"
                        :chartData="lineChartData"
                />
            </CardFlexbox>

            <h2>Vue Trend</h2>
            <CardFlexbox>
                <Trend
                        class="card"
                        :data="trendData"
                        :gradient="['#42b983', '#2c3e50']"
                        auto-draw
                        smooth
                />
            </CardFlexbox>

            <h2>KpiCard</h2>
            <CardFlexbox>
                <KpiCard
                        icon="/icons/logo.png"
                        value="100%"
                        label="attributes used"
                        :trendData="trendData"
                        urlLabel="learn more"
                        url="https://vuejs.org"
                />
                <KpiCard
                        value="Value"
                        label="and label"
                />
                <KpiCard
                        icon="/icons/logo.png"
                        value="url without urlLabel"
                        label="label"
                        url="https://vuejs.org"
                />
            </CardFlexbox>

            <h2>CardFlexbox</h2>
            <CardFlexbox minWidth="200px">
                <KpiCard
                        v-for="(kpi, index) in kpis"
                        :key="index"
                        :icon="kpi.icon"
                        :value="kpi.value"
                        :label="kpi.label"
                />
            </CardFlexbox>

            <h2>CardGrid</h2>
            <CardGrid minWidth="200px">
                <KpiCard
                        v-for="(kpi, index) in kpis"
                        :key="index"
                        :icon="kpi.icon"
                        :value="kpi.value"
                        :label="kpi.label"
                        :trend-data="kpi.trendData"
                />
            </CardGrid>
        </div>
    </div>
</template>

<script>
    import KpiCard from "./KpiCard";
    import CardFlexbox from "./CardFlexbox";
    import CardGrid from "./CardGrid";
    import ChartjsHorizontalBar from "./chartjs/ChartjsHorizontalBar";
    import FakerHelper from "../helpers/FakerHelper";
    import ChartjsDoughnut from "./chartjs/ChartjsDoughnut";
    import ChartjsAreaStacked from "./chartjs/ChartjsAreaStacked";
    import Trend from "vuetrend";

    export default {
        name: "Dashboard",
        components: {
            ChartjsAreaStacked,
            CardFlexbox,
            CardGrid,
            KpiCard,
            ChartjsHorizontalBar,
            ChartjsDoughnut,
            Trend,
        },
        data () {
            return {
                kpis: FakerHelper.kpis(5),
                barChartData: FakerHelper.barChartData(),
                pieChartData: FakerHelper.pieChartData(),
                lineChartData: FakerHelper.lineChartData(),
                trendData: FakerHelper.trendData(),
            }
        }
    }
</script>

<style lang="scss">
    @import "../styles/card";

    :root {
        --dashboard-background: lightgrey;
        --grid-gap: 10px;
        --card-background: #f5f5f5;
        --card-hover-background: white;

    }

    .dashboard {
        @include card;
        background-color: var(--dashboard-background);
        color: #2c3e50;
    }

</style>
