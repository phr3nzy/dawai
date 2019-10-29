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
  head() {
    return {
      title: this.$t('pages.index.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.index.meta.description')
        }
      ]
    }
  }
}
</script>
