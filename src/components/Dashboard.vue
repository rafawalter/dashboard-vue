<template>
    <div>
        <h1>Dashboard</h1>
        <div class="dashboard">
            <h2>CardFlexbox</h2>
            <CardFlexbox minWidth="200px">
                <KpiCard
                        icon="/icons/logo.png"
                        value="123"
                        label="bla"
                />
                <KpiCard
                        icon="/icons/logo.png"
                        value="123"
                        label="bla"
                />
                <KpiCard
                        icon="/icons/logo.png"
                        value="123"
                        label="bla"
                />
                <KpiCard
                        icon="/icons/logo.png"
                        value="123"
                        label="bla"
                />
                <KpiCard
                        icon="/icons/logo.png"
                        value="123"
                        label="bla"
                />
            </CardFlexbox>
            <h2>CardGrid</h2>
            <CardGrid minWidth="200px">
                <KpiCard
                        icon="/icons/logo.png"
                        value="123"
                        label="bla"
                />
                <KpiCard
                        icon="/icons/logo.png"
                        value="123"
                        label="bla"
                />
                <KpiCard
                        icon="/icons/logo.png"
                        value="123"
                        label="bla"
                />
                <KpiCard
                        icon="/icons/logo.png"
                        value="123"
                        label="bla"
                />
                <KpiCard
                        icon="/icons/logo.png"
                        value="123"
                        label="bla"
                />
            </CardGrid>
        </div>
    </div>
</template>

<script>
    import KpiCard from "./KpiCard";
    import CardFlexbox from "./CardFlexbox";
    import CardGrid from "./CardGrid";

    export default {
        name: "Dashboard",
        components: {
            CardFlexbox,
            CardGrid,
            KpiCard,
        }
    }
</script>

<style lang="scss">
    :root {
        --dashboard-background: lightgrey;
        --grid-gap: 10px;
    }

    .dashboard {
        background-color: var(--dashboard-background);
        padding: var(--grid-gap);
        border-radius: 5px;
    }
</style>
