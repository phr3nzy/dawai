<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12">
        <WelcomeSheet />
      </v-col>
      <v-col cols="12" xs="12">
        <Search />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WelcomeSheet from '@/components/index/WelcomeSheet'
import Search from '@/components/index/Search'
export default {
  components: {
    WelcomeSheet,
    Search
  },
  layout: 'none',
  head: () => ({
    title: 'Home',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Search for any medicine you need using Dawai! We connect you with all the pharmacies we can to help you find whatever medicine you need efficiently.'
      }
    ]
  })
}
</script>
