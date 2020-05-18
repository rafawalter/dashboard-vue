<template>
    <div>
        <h1>Dashboard</h1>
        <div class="dashboard">
            <h2>Chartjs</h2>
            <CardGrid>
                <ChartjsBar
                        class="card"
                        :chartData="chartData"
                />
            </CardGrid>

            <h2>KpiCard</h2>
            <CardGrid>
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
            </CardGrid>

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
    import ChartjsBar from "./ChartjsBar";
    import FakerHelper from "../helpers/FakerHelper";

    export default {
        name: "Dashboard",
        components: {
            CardFlexbox,
            CardGrid,
            KpiCard,
            ChartjsBar,
        },
        data () {
            return {
                kpis: FakerHelper.kpis(5),
                chartData: FakerHelper.chartData()
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

        .card {
            @include card;
            background-color: var(--card-background);
        }
    }

</style>
