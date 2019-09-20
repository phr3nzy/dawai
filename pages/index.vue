<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 md4>
      <v-card class="slight-br pa-5">
        <apexcharts
          width="300"
          type="bar"
          :options="options"
          :series="series"
        ></apexcharts>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
  head: () => ({
    title: 'Dashboard',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Dashboard for your pharmacy management'
      }
    ]
  }),
  data: () => ({
    options: {
      chart: {
        id: 'vuechart-example'
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  })
}
</script>
