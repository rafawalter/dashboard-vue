<template>
    <div class="card-flexbox" :style="cssProps">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "CardFlexbox",
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

    .card-flexbox {
        display: flex;
        flex-wrap: wrap;
        margin: calc(-1 * var(--grid-gap) / 2);

        > * {
            @include card;
            background-color: var(--card-background);

            flex-basis: var(--card-minwidth, 200px);
            flex-grow: 1;
            margin: calc(var(--grid-gap) / 2);
        }
    }
</style>
