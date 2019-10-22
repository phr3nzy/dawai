<template>
  <v-container>
    <v-layout row>
      <WelcomeSheet />
    </v-layout>
  </v-container>
</template>

<script>
import WelcomeSheet from '@/components/index/WelcomeSheet'
export default {
  components: {
    WelcomeSheet
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
