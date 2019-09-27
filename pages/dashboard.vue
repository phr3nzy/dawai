<template>
  <v-row align="center" justify="center" dense>
    <v-col cols="12" sm="12" md="12" lg="12" xl="12">
      <MainSheet />
    </v-col>
    <v-col cols="12" sm="12" md="12" lg="12" xl="12">
      <DisplaySheets />
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="4" xl="4">
      <LineChart />
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="4" xl="4">
      <PieChart />
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="4" xl="4">
      <HorizontalBarChart />
    </v-col>
    <v-col cols="12" sm="12" md="12" lg="12" xl="12">
      <TimeChart />
    </v-col>
  </v-row>
  <!-- <v-layout row wrap>
    <v-flex xs12>
      <MainSheet />
      <DisplaySheets />
      <v-card flat>
        <LineChart />
      </v-card>
      <v-card flat>
        <PieChart />
      </v-card>
      <v-card flat>
        <HorizontalBarChart />
      </v-card>
      <v-card flat>
        <TimeChart />
      </v-card>
    </v-flex>
  </v-layout> -->
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
