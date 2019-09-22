<template>
  <v-card class="mt-10 pb-5" outlined flat>
    <v-sheet
      class="v-sheet--offset mx-auto px-4 py-8"
      color="primary"
      min-height="100px"
      max-width="calc(100% - 64px)"
      elevation="6"
      dark
    >
      <span class="display-2 font-weight-thin">Inventory</span>
    </v-sheet>
    <v-card-title>
      <v-text-field
        v-model="search"
        label="Search Medcine"
        type="text"
        :clear-icon="mdiClose"
        clearable
        :prepend-inner-icon="mdiMagnify"
        outlined
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn class="mr-2" large text color="primary"
        >Add Medicine <v-icon right>{{ mdiPlusCircleOutline }}</v-icon></v-btn
      >
      <v-btn class="ml-2" large text color="primary"
        >Refresh <v-icon right>{{ mdiRefresh }}</v-icon></v-btn
      >
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="employees"
      :page.sync="page"
      :search="search"
      :items-per-page="itemsPerPage"
      hide-default-footer
      multi-sort
      @page-count="pageCount = $event"
    >
      <template v-slot:item.expiry="{ item }">
        <v-progress-linear
          v-if="item.expiry >= 75 && item.expiry <= 100"
          color="green lighten-1"
          height="10"
          rounded
          striped
          :value="item.expiry"
        ></v-progress-linear>
        <v-progress-linear
          v-else-if="item.expiry <= 74 && item.expiry >= 25"
          color="orange darken-1"
          height="10"
          rounded
          striped
          :value="item.expiry"
        ></v-progress-linear>
        <v-progress-linear
          v-else
          color="red darken-1"
          height="10"
          rounded
          striped
          :value="item.expiry"
        ></v-progress-linear>
      </template>
      <template v-slot:item.price="{ item }">
        <span
          >{{ item.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}
          <sup>SDG</sup></span
        >
      </template>
      <template v-slot:item.availability="{ item }">
        <v-chip v-if="item.availability" color="success">
          <v-icon>{{ mdiCheckCircleOutline }}</v-icon>
        </v-chip>
        <v-chip v-else class="white--text" color="danger"
          ><v-icon>{{ mdiCloseCircleOutline }}</v-icon></v-chip
        >
      </template>
      <template v-slot:item.action="{ item }">
        <v-btn text icon color="green">
          <v-icon small>
            {{ mdiPencil }}
          </v-icon>
        </v-btn>
        <v-btn text icon color="red">
          <v-icon small>
            {{ mdiDeleteForever }}
          </v-icon>
        </v-btn>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">
          Reset
        </v-btn>
      </template>

      <template v-slot:no-results>
        Oops! Medicine doesn't exist!
        <v-btn class="mr-2" small text color="primary"
          >Add Medicine <v-icon right>{{ mdiPlusCircleOutline }}</v-icon></v-btn
        >
      </template>
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :next-icon="mdiChevronRight"
        color="primary"
        circle
        :prev-icon="mdiChevronLeft"
        :length="pageCount"
      />
    </div>
  </v-card>
</template>

<script>
import {
  mdiChevronRight,
  mdiChevronLeft,
  mdiPencil,
  mdiDeleteForever,
  mdiPlusCircleOutline,
  mdiRefresh,
  mdiMagnify,
  mdiClose,
  mdiCheckCircleOutline,
  mdiCloseCircleOutline
} from '@mdi/js'
export default {
  data: () => ({
    mdiChevronRight,
    mdiChevronLeft,
    mdiPencil,
    mdiDeleteForever,
    mdiPlusCircleOutline,
    mdiRefresh,
    mdiMagnify,
    mdiClose,
    mdiCheckCircleOutline,
    mdiCloseCircleOutline,
    page: 1,
    pageCount: 0,
    itemsPerPage: 5,
    search: '',
    headers: [
      {
        text: 'Name',
        align: 'left',
        sortable: true,
        value: 'name'
      },
      { text: 'Quantity', align: 'center', value: 'quantity' },
      { text: 'Price', align: 'center', value: 'price' },
      { text: 'Expiry', align: 'center', value: 'expiry' },
      { text: 'Availability', align: 'right', value: 'availability' },
      { text: 'Actions', value: 'action', sortable: false, align: 'center' }
    ],
    employees: [
      {
        name: 'Panadol',
        quantity: 15,
        price: 40,
        expiry: '88',
        availability: true
      },
      {
        name: 'Ibuprofen',
        quantity: 28,
        price: 60,
        expiry: '95',
        availability: true
      },
      {
        name: 'Paracetamol',
        quantity: 43,
        price: 55,
        expiry: '33',
        availability: true
      },
      {
        name: 'Panadol Extra',
        quantity: 89,
        price: 800,
        expiry: '49',
        availability: false
      },
      {
        name: 'Panadol Lite',
        quantity: 99,
        price: 1200,
        expiry: '12',
        availability: false
      }
    ]
  })
}
</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
