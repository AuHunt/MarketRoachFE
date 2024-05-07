<template>
    <v-app style="height: 100vh">
        <v-app-bar class="outliner" title="Application bar"></v-app-bar>
        <!-- <v-navigation-drawer floating temporary></v-navigation-drawer> -->
        <v-main class="app-main fill-height">
            <v-container class="fill-height outliner" fluid>
                <v-row class="fill-height" no-gutters>
                    <v-col cols="12" md="9" class="outliner">
                        <v-row
                            class="outliner"
                            style="height: 70%; min-height: 550px; margin-bottom: 5px"
                            no-gutters
                        >
                            <v-col>
                                <h1>Market Roach</h1>
                            </v-col>
                        </v-row>
                        <v-row class="outliner" style="height: 30%; min-height: 230px" no-gutters>
                            <v-col>
                                <h1>Market Roach</h1>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="3" class="outliner fill-height">
                        <v-row style="height: 10%; max-height: 80px" no-gutters>
                            <v-col class="outliner">search bar</v-col>
                        </v-row>
                        <v-row style="height: 90%; max-height: 720px" no-gutters>
                            <v-col class="fill-height">
                                <v-infinite-scroll
                                    class="outliner tall-grid-item"
                                    :items="items"
                                    @load="load"
                                >
                                    <template v-for="(item, index) in items" :key="item">
                                        <div
                                            :class="[
                                                'pa-2',
                                                index % 2 === 0 ? 'bg-grey-lighten-2' : '',
                                            ]"
                                        >
                                            Item number #{{ item }}
                                        </div>
                                    </template>
                                </v-infinite-scroll>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from 'vue'

const items = ref(Array.from({ length: 5 }, (k, v) => v + 1))

async function api() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1))
        }, 1000)
    })
}

async function load({ done }) {
    // Perform API call
    const res = await api()

    items.value.push(...res)

    done('ok')
}
</script>

<style lang="scss">
.app-main {
    background-color: #010113;
}

.outliner {
    border: 1px solid white;
}

.tall-grid-item {
    height: 100%;
    overflow-y: auto;
}

h1 {
    color: #42b983;
}
</style>
