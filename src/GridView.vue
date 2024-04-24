<template>
    <div class="grid-container">
        <div class="box box1">
            <h1>Market Roach</h1>
        </div>
        <div class="box box2">
            <h1>Market Roach</h1>
        </div>
        <div class="box box3">
            <h1>Market Roach</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GridLayout',
}
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr;
    gap: 10px;
    height: 100vh; /* Adjust based on your needs */
}

.box {
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    padding: 20px;
}

.box1 {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
}

.box2 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
}

.box3 {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
}

h1 {
    color: #42b983;
}
</style>
