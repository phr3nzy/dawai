<template>
  <v-row align="center" justify="center" dense>
    <v-col cols="12" sm="12" md="6" lg="4" xl="4">
      <v-sheet
        min-height="265"
        max-height="335"
        class="mx-5 mt-5 mb-12 pa-5 transparent"
        dark
      >
        <v-row justify="center" align="center">
          <div class="text-center ma-5">
            <v-progress-circular
              rotate="90"
              size="128"
              value="72"
              width="8"
              color="primary"
              >72%</v-progress-circular
            >
          </div>
        </v-row>
        <v-row align="center" justify="center">
          <span class="headline text-center black--text"
            >Yearly Income Goal</span
          >
        </v-row>
      </v-sheet>
    </v-col>
    <v-col cols="12" sm="12" md="6" lg="4" xl="4">
      <v-sheet
        min-height="265"
        max-height="335"
        class="mx-5 mt-5 mb-12 pa-5 transparent"
        dark
      >
        <v-row class="mb-9 mt-2" justify="center" align="center">
          <v-icon color="primary" size="112">{{ mdiCashMultiple }}</v-icon>
        </v-row>
        <v-row align="center" justify="center">
          <span class="headline text-center black--text"
            >55,700.00 <sup>SDG</sup></span
          >
        </v-row>
        <v-row align="center" justify="center">
          <span class="text-center black--text">Avg. Monthly Income</span>
        </v-row>
      </v-sheet>
    </v-col>
    <v-col cols="12" sm="12" md="6" lg="4" xl="4">
      <v-sheet
        min-height="265"
        max-height="335"
        class="mx-5 mt-5 mb-12 pa-5 transparent"
        dark
      >
        <v-row justify="center" align="center">
          <div class="text-center ma-5">
            <v-progress-circular
              rotate="90"
              size="128"
              value="28"
              width="8"
              color="primary"
              >28%</v-progress-circular
            >
          </div>
        </v-row>
        <v-row align="center" justify="center">
          <span class="headline text-center black--text"
            >Monthly Income Goal</span
          >
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import { mdiCashMultiple } from '@mdi/js'
export default {
  data: () => ({
    mdiCashMultiple
  })
}
</script>
