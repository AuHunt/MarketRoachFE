<template>
    <v-main class="app-main fill-height">
        <v-container class="fill-height outliner" fluid>
            <v-row class="fill-height" no-gutters>
                <v-col cols="12" md="9" class="outliner fill-height">
                    <v-row class="outliner" style="height: 70%" no-gutters>
                        <v-col>
                            <ChartView />
                        </v-col>
                    </v-row>
                    <v-row class="outliner" style="height: 30%; max-height: 250px" no-gutters>
                        <v-col>
                            <AnalyticsPanel />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="3" class="outliner fill-height d-flex flex-column">
                    <InfoFeed />
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script lang="ts">
import ChartView from './ChartView.vue'
import AnalyticsPanel from './AnalyticsPanel.vue'
import InfoFeed from './InfoFeed.vue'

export default {
    name: 'MainLayout',
    components: {
        ChartView,
        AnalyticsPanel,
        InfoFeed,
    },
}
</script>

<style lang="scss" scoped>
.app-main {
    background-color: #010113;
}
</style>

<style lang="scss">
.outliner {
    border: 1px solid white;
}

h1 {
    color: #42b983;
}
</style>
