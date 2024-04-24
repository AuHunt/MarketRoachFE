<template>
    <main class="app-container">
        <div class="grid-view">
            <section class="grid-item">
                <h1>Market Roach</h1>
            </section>
            <section class="grid-item tall-grid-item">
                <h1>Market Roach</h1>
            </section>
            <section class="grid-item">
                <h1>Market Roach</h1>
            </section>
        </div>
    </main>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style lang="scss">
:root {
    --background-color: #010113;
    --text-color: white;
}

html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

body {
    background-color: var(--background-color);
    color: var(--text-color);
}

#app {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
}

.app-container {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 10px;
}

.grid-view {
    display: grid;
    box-sizing: border-box;
    grid-template-columns: 7fr 3fr;
    grid-template-rows: 7fr 3fr;
    gap: 10px;
    width: 100%;
    height: 100%;
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
