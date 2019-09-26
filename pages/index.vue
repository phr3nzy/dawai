<template>
  <v-container>
    <v-layout row>
      <WelcomeSheet />
      <ShortcutSheets />
    </v-layout>
  </v-container>
</template>

<script>
import WelcomeSheet from '@/components/index/WelcomeSheet'
import ShortcutSheets from '@/components/index/ShortcutSheets'
export default {
  components: {
    WelcomeSheet,
    ShortcutSheets
  },
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
  head: () => ({
    title: 'Home'
  })
}
</script>
