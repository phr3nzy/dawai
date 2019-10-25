<template>
  <v-container fluid>
    <unavailable />
    <!-- <v-flex xs12 md4>
      <h1>Finance Page</h1>
    </v-flex> -->
  </v-container>
</template>

<script>
import Unavailable from '@/components/Unavailable'
export default {
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
  head: () => ({
    title: 'Finance',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Manage your Finances including creating invoices, checking monthly and yearly goals, viewing your revenue and more'
      }
    ]
  }),
  components: {
    Unavailable
  }
}
</script>
