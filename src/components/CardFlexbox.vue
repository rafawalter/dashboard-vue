<template>
    <div class="card-flexbox">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "CardFlexbox"
    }
</script>

<style lang="scss">
    .card-flexbox {
        display: flex;
        flex-wrap: wrap;
        margin: calc( -1 * var(--grid-gap) / 2);
        > * {
            flex-grow: 1;
            flex-basis: 220px;
            margin: calc(var(--grid-gap) / 2);
        }
    }
</style>
