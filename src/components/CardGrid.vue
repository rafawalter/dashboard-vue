<template>
    <div class="card-grid">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "CardGrid",
        props: {
            minWidth: Number,
        }
    }
</script>

<style scoped lang="scss">
    .card-grid {
        display: grid;
        grid-gap: var(--grid-gap);
        grid-template-columns: repeat( auto-fit, minmax(200px, 1fr));
    }
</style>
