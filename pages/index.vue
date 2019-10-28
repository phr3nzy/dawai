<template>
  <v-container>
    <v-row justify="center" align="center">
      <WelcomeSheet />
    </v-row>
    <v-row justify="center" align="center">
      <Search />
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
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
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
