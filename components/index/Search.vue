<template>
  <v-col cols="12" sm="12">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6">
        <v-alert
          :icon="mdiInformation"
          border="left"
          :value="true"
          type="info"
          text
        >
          This is a demo
        </v-alert>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
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
      <skeleton-loading v-if="isLoading"/>
      <search-result v-if="!isLoading && showMapResult" :pharmacies="pharmacies"
    /></v-row>
  </v-col>
</template>

<script>
import {
  mdiPill,
  mdiMagnify,
  mdiClose,
  mdiChevronDown,
  mdiBullseyeArrow,
  mdiFormatListBulletedType,
  mdiInformation
} from '@mdi/js'
import medicineList from './meds'
import SearchResult from '@/components/index/SearchResult'
import SkeletonLoading from '@/components/index/SkeletonLoading'
export default {
  components: {
    SkeletonLoading,
    SearchResult
  },
  inject: ['theme'],
  data() {
    return {
      pharmacies: [
        { id: 1, name: 'Agiad Pharmacy', lat: 15.5480541, lng: 32.5635062 },
        {
          id: 2,
          name: 'Abu Miqdad Pharmacy',
          lat: 15.5482558,
          lng: 32.5639826
        },
        {
          id: 3,
          name: 'Khawarizmi Pharmacy',
          lat: 15.54747,
          lng: 32.565796
        },
        {
          id: 4,
          name: 'Pyramid Pharmacy',
          lat: 15.548249,
          lng: 32.56729
        }
      ],
      showMapResult: false,
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
      mdiInformation,
      medicine: medicineList
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
        this.showMapResult = true
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
