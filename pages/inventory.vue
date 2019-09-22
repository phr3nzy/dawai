<template>
  <v-layout justify-center align-center>
    <v-flex xs12>
      <DataTable />
    </v-flex>
  </v-layout>
</template>

<script>
import DataTable from '@/components/inventory/DataTable'
export default {
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
  components: {
    DataTable
  },
  head: () => ({
    title: 'Inventory'
  })
}
</script>
