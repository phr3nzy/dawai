<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="6" md="4" lg="3">
      <v-sheet class="main-gradient pa-5" dark>
        <v-row align="center" justify="center">
          <v-card color="transparent" flat>
            <v-icon size="160">{{ mdiReceipt }}</v-icon>
            <v-card-actions class="text-center">
              <v-btn block class="black--text" color="white"
                >Create Invoice</v-btn
              >
            </v-card-actions>
          </v-card></v-row
        ></v-sheet
      >
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3">
      <v-sheet class="main-gradient pa-5" dark>
        <v-row align="center" justify="center">
          <v-card color="transparent" flat>
            <v-icon size="160">{{ mdiBottleTonicPlus }}</v-icon>
            <v-card-actions class="text-center">
              <v-btn block class="black--text" color="white"
                >Add Medicine</v-btn
              >
            </v-card-actions>
          </v-card></v-row
        ></v-sheet
      >
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3">
      <v-sheet class="main-gradient pa-5" dark>
        <v-row align="center" justify="center">
          <v-card color="transparent" flat>
            <v-icon size="160">{{ mdiFileChartOutline }}</v-icon>
            <v-card-actions class="text-center">
              <v-btn block class="black--text" color="white"
                >Sales Report</v-btn
              >
            </v-card-actions>
          </v-card></v-row
        ></v-sheet
      >
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3">
      <v-sheet class="main-gradient pa-5" dark>
        <v-row align="center" justify="center">
          <v-card color="transparent" flat>
            <v-icon size="160">{{ mdiBell }}</v-icon>
            <v-card-actions class="text-center">
              <v-btn :disabled="true" block class="black--text" color="white"
                >0 Notifications</v-btn
              >
            </v-card-actions>
          </v-card></v-row
        ></v-sheet
      >
    </v-col>
  </v-row>
</template>

<script>
import {
  mdiReceipt,
  mdiBottleTonicPlus,
  mdiFileChartOutline,
  mdiBell
} from '@mdi/js'
export default {
  data: () => ({
    mdiReceipt,
    mdiBottleTonicPlus,
    mdiFileChartOutline,
    mdiBell
  })
}
</script>
