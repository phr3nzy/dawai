<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  data: () => ({
    chartdata: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Wholesale',
          backgroundColor: 'rgb(25, 229, 28)',
          data: [454, 420, 558, 326, 285, 522]
        },
        {
          label: 'Retail',
          backgroundColor: 'rgba(61, 0, 102, 1)',
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
        text: 'Wholesale vs. Retails Sales'
      }
    }
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
