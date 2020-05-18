<template>
    <div class="card-grid" :style="cssProps">
        <slot></slot>
    </div>
</template>

<script>


    export default {
        name: "CardGrid",
        props: {
            minWidth: String,
        },
        computed: {
            cssProps() {
                return {
                    '--card-minwidth': this.minWidth
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../styles/card";

    .card-grid {
        display: grid;
        grid-gap: var(--grid-gap);
        grid-template-columns: repeat( auto-fill, minmax(var(--card-minwidth, 200px), 1fr));

        > * {
            @include card;
            background-color: var(--card-background);
        }
    }
</style>
