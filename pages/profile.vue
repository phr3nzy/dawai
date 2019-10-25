<template>
  <v-container fluid>
    <unavailable />
    <!-- <v-flex xs12 md4>
      <h1>Profile Page</h1>
    </v-flex> -->
  </v-container>
</template>

<script>
import Unavailable from '@/components/Unavailable'
export default {
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
  components: {
    Unavailable
  }
}
</script>
