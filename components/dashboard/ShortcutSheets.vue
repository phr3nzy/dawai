<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="6" md="3" lg="3">
      <v-sheet class="transparent" dark>
        <v-row align="center" justify="center">
          <v-card color="transparent" flat>
            <v-icon color="primary" size="160">{{ mdiReceipt }}</v-icon>
            <v-card-actions class="text-center">
              <v-btn to="/finance" block class="black--text" color="white"
                >Create Invoice</v-btn
              >
            </v-card-actions>
          </v-card></v-row
        ></v-sheet
      >
    </v-col>
    <v-col cols="12" sm="6" md="3" lg="3">
      <v-sheet class="transparent" dark>
        <v-row align="center" justify="center">
          <v-card color="transparent" flat>
            <v-icon color="primary" size="160">{{ mdiBottleTonicPlus }}</v-icon>
            <v-card-actions class="text-center">
              <v-btn to="/medicine" block class="black--text" color="white"
                >Add Medicine</v-btn
              >
            </v-card-actions>
          </v-card></v-row
        ></v-sheet
      >
    </v-col>
    <v-col cols="12" sm="6" md="3" lg="3">
      <v-sheet class="transparent" dark>
        <v-row align="center" justify="center">
          <v-card color="transparent" flat>
            <v-icon color="primary" size="160">{{ mdiBell }}</v-icon>
            <v-card-actions class="text-center">
              <v-btn class="black--text" block color="white"
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
