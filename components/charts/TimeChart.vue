<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: [
        '12:00:00 PM',
        '1:00:00 PM',
        '2:00:00 PM',
        '3:00:00 PM',
        '4:00:00 PM',
        '5:00:00 PM',
        '6:00:00 PM',
        '7:00:00 PM',
        '8:00:00 PM',
        '9:00:00 PM',
        '10:00:00 PM',
        '11:00:00 PM',
        '12:00:00 PM'
      ],
      datasets: [
        {
          label: 'Sales',
          borderColor: 'rgb(61, 0, 102)',
          backgroundColor: 'rgba(61, 0, 102, 0.3)',
          fill: true,
          data: [4, 4, 15, 23, 12, 5, 18, 19, 20, 2, 11, 12, 25]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        position: 'bottom',
        text: 'Hourly Sales'
      },
      legend: {
        display: false
      }
    }
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
