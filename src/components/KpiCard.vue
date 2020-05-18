<template>
    <component :is="tag" class="card" :href="url">
        <img class="icon" :src="icon">
        <div class="dados">
            <div class="value">{{value}}</div>
            <div class="label">{{label}}</div>
            <a v-if="hasLink" class="link" :href="url">{{urlLabel}}</a>
        </div>
    </component>
</template>

<script>
    export default {
        name: "KpiCard",
        props: {
            icon: String,
            value: String,
            label: String,
            url: String,
            urlLabel: {
                type: String,
                default: 'more info'
            },
        },
        computed: {
            hasLink() {
                return !!this.url
            },
            tag() {
                return this.hasLink
                    ? 'a'
                    : 'div'
            }
        },
        components: {
        }
    }
</script>

<style scoped lang="scss">
    .card {
        display: flex;
        justify-content: center;
    }
    a.card {
        text-decoration: none;
        color: inherit;

        &:hover {
            background-color: var(--card-hover-background);
        }
    }
    .icon {
        width: auto;
        height: 50px;
        margin-right: var(--grid-gap);
    }
    .value {
        font-weight: bold;
    }
</style>
