<template>
    <div>
        <h1>Dashboard</h1>
        <div class="dashboard">
            <h2>Chartjs</h2>
            <CardFlexbox
                min-width="300px"
            >
                <ChartjsBar
                        title="Bar"
                        :chartData="barChartData"
                />
                <ChartjsDoughnut
                        title="Doughtnut"
                        :chartData="pieChartData"
                />
                <ChartjsAreaStacked
                        title="Stacked Area"
                        :chartData="lineChartData"
                />
            </CardFlexbox>

            <h2>KpiCard</h2>
            <CardFlexbox>
                <KpiCard
                        icon="/icons/logo.png"
                        value="value"
                        label="label"
                        urlLabel="learn more"
                        url="https://vuejs.org"
                />
                <KpiCard
                        value="without icon"
                        label="label"
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
                />
            </CardGrid>
        </div>
    </div>
</template>

<script>
    import KpiCard from "./KpiCard";
    import CardFlexbox from "./CardFlexbox";
    import CardGrid from "./CardGrid";
    import ChartjsBar from "./chartjs/ChartjsBar";
    import FakerHelper from "../helpers/FakerHelper";
    import ChartjsDoughnut from "./chartjs/ChartjsDoughnut";
    import ChartjsAreaStacked from "./chartjs/ChartjsAreaStacked";

    export default {
        name: "Dashboard",
        components: {
            ChartjsAreaStacked,
            CardFlexbox,
            CardGrid,
            KpiCard,
            ChartjsBar,
            ChartjsDoughnut,
        },
        data () {
            return {
                kpis: FakerHelper.kpis(5),
                barChartData: FakerHelper.barChartData(),
                pieChartData: FakerHelper.pieChartData(),
                lineChartData: FakerHelper.lineChartData(),
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
    }

</style>
