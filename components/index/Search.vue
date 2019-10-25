<template>
  <v-row align="center" justify="center">
    <v-col cols="12" xs="12">
      <h1 class="text-center">* This is a demo</h1>
    </v-col>
    <v-col cols="12" xs="12" md="8" lg="5">
      <v-autocomplete
        v-model="select"
        color="primary"
        label="Search for Medicine"
        hint="Try 'Panadol'..."
        :items="items"
        :loading="loading"
        :search-input.sync="search"
        :prepend-inner-icon="mdiPill"
        :clear-icon="mdiClose"
        loader-height="3"
        hide-details
        hide-no-data
        cache-items
        clearable
        autofocus
        solo
      ></v-autocomplete>
    </v-col>
    <v-col class="text-center" cols="12" xs="12" md="12" lg="1">
      <v-btn
        color="primary"
        :loading="isLoading"
        :disabled="!select"
        large
        rounded
        @click="searchMedicine"
        ><v-icon>{{ mdiMagnify }}</v-icon></v-btn
      >
    </v-col>
    <v-col v-if="isLoading" class="mt-12" cols="12" xs="12">
      <v-sheet color="transparent" class="px-3 pt-3 pb-3">
        <v-skeleton-loader
          class="slight-br my-3"
          max-width="auto"
          type="list-item-avatar-three-line"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="slight-br my-3"
          max-width="auto"
          type="list-item-avatar-three-line"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="slight-br my-3"
          max-width="auto"
          type="list-item-avatar-three-line"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="slight-br"
          max-width="auto"
          type="image"
        ></v-skeleton-loader>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import {
  mdiPill,
  mdiMagnify,
  mdiClose,
  mdiChevronDown,
  mdiBullseyeArrow,
  mdiFormatListBulletedType
} from '@mdi/js'
export default {
  inject: ['theme'],
  data() {
    return {
      select: null,
      search: '',
      loading: false,
      isLoading: false,
      items: [],
      mdiPill,
      mdiMagnify,
      mdiClose,
      mdiChevronDown,
      mdiBullseyeArrow,
      mdiFormatListBulletedType,
      medicine: [
        'Panadol',
        'Panadol Extra',
        'Panadol Light',
        'Ibuprofen',
        'Ibuprofen Extra',
        'Paracetamol',
        'Super Paracetamol'
      ]
    }
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val)
    }
  },
  methods: {
    searchMedicine() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 5000)
    },
    querySelections(v) {
      this.loading = true
      setTimeout(() => {
        this.items = this.medicine.filter((e) => {
          return (e || '').toLowerCase().includes((v || '').toLowerCase())
        })
        this.loading = false
      }, 1000)
    }
  }
}
</script>
