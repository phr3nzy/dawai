<template>
  <v-layout row wrap>
    <v-flex xs12 md4>
      <h1>Finance Page</h1>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default')
}
</script>
