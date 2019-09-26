<template>
  <v-row align="center" justify="center">
    <v-card color="transparent" flat>
      <v-img
        height="250"
        width="250"
        :aspect-ratio="16 / 9"
        src="/logo-1024-transparent.svg"
      ></v-img>
      <v-card-text class="text-center">
        <span class="headline font-weight-thin">Welcome to Dawai!</span>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
export default {
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
  head: () => ({
    title: 'Home'
  })
}
</script>
