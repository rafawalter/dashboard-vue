<template>
    <div class="card">
        <img class="icon" :src="icon">
        <div class="dados">
            <div class="value">{{value}}</div>
            <div class="label">{{label}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "KpiCard",
        props: {
            icon: String,
            value: String,
            label: String,
        },
        components: {
        }
    }
</script>

<style scoped lang="scss">
    .card {
        --card-background: #f5f5f5;
        --card-hover-background: white;

        background-color: var(--card-background);
        padding: var(--grid-gap);
        border-radius: 5px;

        display: flex;
        justify-content: center;
    }
    .icon {
        width: auto;
        height: 50px;
    }
    .value {
        font-weight: bold;
    }
</style>
