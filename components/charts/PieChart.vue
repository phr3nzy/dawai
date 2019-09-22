<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  data: () => ({
    chartdata: {
      labels: ['Children', 'Teenagers', 'Adults', 'Elderly'],
      datasets: [
        {
          label: 'Customer',
          backgroundColor: [
            'rgba(61, 0, 102, 0.1)',
            'rgba(61, 0, 102, 0.3)',
            'rgba(61, 0, 102, 0.5)',
            'rgba(61, 0, 102, 0.7)'
          ],
          fill: true,
          data: [454, 420, 558, 326]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        position: 'bottom',
        text: 'Customer Demographs'
      }
    }
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
