<template>
    <main class="app-container">
        <div class="grid-view">
            <section class="grid-item">
                <h1>Market Roach</h1>
            </section>
            <section class="grid-item tall-grid-item" style="overflow-y: scroll">
                <v-infinite-scroll :items="items" @load="load">
                    <template v-for="(item, index) in items" :key="item">
                        <div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
                            Item number #{{ item }}
                        </div>
                    </template>
                </v-infinite-scroll>
            </section>
            <section class="grid-item">
                <h1>Market Roach</h1>
            </section>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue'

const items = ref(Array.from({ length: 30 }, (k, v) => v + 1))

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
html,
body {
    height: 100%;
    width: 100%;
}

body {
    background-color: #010113;
    color: white;
}

#app,
.app-container,
.grid-view {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
}

.app-container {
    padding: 10px;
}

.grid-view {
    display: grid;
    grid-template-columns: 7fr 3fr;
    grid-template-rows: 7fr 3fr;
    gap: 10px;
}

.grid-item {
    border-radius: 5px;
    border: 1px solid white;
}

.tall-grid-item {
    grid-row: span 2;
}

h1 {
    color: #42b983;
}
</style>
