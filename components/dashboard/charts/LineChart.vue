<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Profit',
          borderColor: 'rgb(108, 216, 126)',
          fill: false,
          data: [454, 420, 558, 326, 285, 522]
        },
        {
          label: 'Revenue',
          borderColor: 'rgb(61, 0, 102)',
          fill: false,
          data: [500, 450, 620, 420, 330, 660]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        position: 'bottom',
        text: 'Profit vs. Revenue'
      }
    }
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
