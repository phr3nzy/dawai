<template>
  <v-layout justify-center align-center>
    <v-flex xs12>
      <DataTable />
    </v-flex>
  </v-layout>
</template>

<script>
import DataTable from '@/components/medicine/DataTable'
export default {
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
  components: {
    DataTable
  },
  head: () => ({
    title: 'Medicine',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Display all the medicine in your inventory including more efficiently using our Medicine module to which you can add, update and delete medicine entries.'
      }
    ]
  })
}
</script>
