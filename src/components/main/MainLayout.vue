<!-- MainLayout.vue -->
<template>
    <v-main class="app-main fill-height">
        <v-container class="fill-height outliner" fluid>
            <v-row class="fill-height" no-gutters>
                <v-col cols="12" md="9" class="outliner">
                    <v-row class="outliner" style="height: 70%; min-height: 550px" no-gutters>
                        <v-col>
                            <ChartView />
                        </v-col>
                    </v-row>
                    <v-row class="outliner" style="height: 30%; min-height: 230px" no-gutters>
                        <v-col>
                            <AnalyticsPanel />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="3" class="outliner fill-height">
                    <InfoFeed />
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
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
