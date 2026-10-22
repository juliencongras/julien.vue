<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'Janvier', 'Février', 'Mars', 'Avril', 'Mai' ],
        datasets: [ { data: [1200, 1400, 800, 2000, 1800] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>