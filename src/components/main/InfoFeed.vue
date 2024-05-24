<!-- InfoFeed.vue -->
<template>
    <v-row style="height: 10%; max-height: 100px" no-gutters>
        <v-col class="outliner">
            <h1>Market Roach Search Bar</h1>
        </v-col>
    </v-row>
    <v-row style="height: 90%; max-height: 2000px" no-gutters>
        <v-col class="fill-height">
            <v-infinite-scroll class="outliner tall-grid-item" :items="items" @load="load">
                <template v-for="(item, index) in items" :key="item">
                    <div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
                        Item number #{{ item }}
                    </div>
                </template>
            </v-infinite-scroll>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const items = ref(Array.from({ length: 5 }, (k, v) => v + 1))

const api = async (): Promise<number[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Move the dependency on items.value outside of setTimeout
            const lastItem = items.value.at(-1) ?? 0
            console.log(lastItem)
            resolve(Array.from({ length: 10 }, (k, v) => v + lastItem + 1))
        }, 1000)
    })
}

const load = async () => {
    const res = await api()
    console.log(res)
    items.value.push(...res)
    console.log(items.value)
}
</script>

<style lang="scss" scoped>
.tall-grid-item {
    height: 100%;
    overflow-y: auto;
}
</style>
