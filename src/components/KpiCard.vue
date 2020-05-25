<template>
    <component :is="tag" class="card" :href="url">
        <img class="icon" :src="icon">
        <div class="dados">
            <div class="value">{{value}}</div>
            <div v-if="label" class="label">{{label}}</div>
            <a v-if="hasLink" class="link" :href="url">{{urlLabel}}</a>
            <div>
                <Trend
                        :data="trendData"
                        :gradient="['#42b983', '#2c3e50']"
                        auto-draw
                        smooth
                />
            </div>
        </div>
    </component>
</template>

<script>
    import Trend from "vuetrend";

    export default {
        name: "KpiCard",
        props: {
            icon: String,
            value: String,
            label: String,
            trendData: Array,
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
            Trend,
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
        font-size: 2em;
    }
</style>
