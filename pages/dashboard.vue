<template>
  <v-layout row wrap>
    <v-flex xs12>
      <MainSheet />
    </v-flex>
    <v-flex xs12>
      <DisplaySheets />
    </v-flex>
    <v-flex xs12 sm6 md4>
      <v-card flat>
        <LineChart />
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md4>
      <v-card flat>
        <PieChart />
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md4>
      <v-card flat>
        <HorizontalBarChart />
      </v-card>
    </v-flex>
    <v-flex class="my-5" xs12>
      <v-card flat>
        <TimeChart />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import MainSheet from '@/components/dashboard/MainSheet'
import LineChart from '@/components/dashboard/charts/LineChart'
import PieChart from '@/components/dashboard/charts/PieChart'
import HorizontalBarChart from '@/components/dashboard/charts/HorizontalBarChart'
import TimeChart from '@/components/dashboard/charts/TimeChart'
import DisplaySheets from '@/components/dashboard/DisplaySheets'
export default {
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
  components: {
    MainSheet,
    LineChart,
    PieChart,
    HorizontalBarChart,
    TimeChart,
    DisplaySheets
  },
  head: () => ({
    title: 'Dashboard'
  })
}
</script>
