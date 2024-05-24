<template>
    <div class="chart-container">
        <ApexChart type="line" :options="chartOptions" :series="series"></ApexChart>
    </div>
</template>

<script lang="ts" setup>
import type { ApexOptions } from 'apexcharts'

const chartOptions: ApexOptions = {
    chart: {
        id: 'my-chart',
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
}

const series = [
    {
        name: 'sales',
        data: [30, 40, 45, 50, 49],
    },
]
</script>

<style lang="scss" scoped>
.chart-container {
    max-width: 80%;
    margin: 0 auto;
}
</style>
