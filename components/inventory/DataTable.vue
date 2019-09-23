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

      <v-btn
        class="ml-2"
        large
        text
        color="primary"
        :disabled="loading"
        @click.stop.prevent="beginLoading"
        >Refresh <v-icon right>{{ mdiRefresh }}</v-icon></v-btn
      >
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }"
          ><v-btn
            class="mr-2"
            :disabled="loading"
            large
            text
            color="primary"
            v-on="on"
            >Add Medicine
            <v-icon right>{{ mdiPlusCircleOutline }}</v-icon></v-btn
          >
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text class="pb-0">
            <v-row dense>
              <v-col cols="12">
                <v-text-field
                  v-model="editedItem.name"
                  label="Medicine Name"
                  :prepend-inner-icon="mdiRenameBox"
                  type="text"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="editedItem.price"
                  label="Price"
                  type="number"
                  :prepend-inner-icon="mdiCurrencyUsd"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="editedItem.expiry"
                  label="Expiry"
                  :prepend-inner-icon="mdiCalendarAlert"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-slider
                  v-model="editedItem.quantity"
                  label="Quantity"
                  max="100"
                  min="0"
                  thumb-label
                  step="1"
                ></v-slider>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  v-model="editedItem.availability"
                  label="Available"
                  color="primary"
                  :on-icon="mdiCheckboxMarked"
                  :off-icon="mdiCheckboxBlankOutline"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions class="pa-5">
            <div class="flex-grow-1"></div>
            <v-btn color="red" text @click="close"
              >Cancel <v-icon right>{{ mdiClose }}</v-icon></v-btn
            >
            <v-btn color="primary" text @click="save"
              >Save <v-icon right>{{ mdiContentSave }}</v-icon></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="inventory"
      :page.sync="page"
      :search="search"
      :loading="loading"
      :loading-text="'Refreshing your inventory...'"
      :items-per-page="10"
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
          v-else-if="item.expiry <= 74 && item.expiry >= 35"
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
        <span>{{ item.price }} <sup>SDG</sup></span>
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
        <v-btn
          text
          icon
          :disabled="loading"
          color="green"
          @click="editItem(item)"
        >
          <v-icon small>
            {{ mdiPencil }}
          </v-icon>
        </v-btn>
        <v-btn
          text
          icon
          :disabled="loading"
          color="red"
          @click="deleteItem(item)"
        >
          <v-icon small>
            {{ mdiDeleteForever }}
          </v-icon>
        </v-btn>
      </template>
      <template v-slot:no-data>
        Nothing in Inventory!
      </template>

      <template v-slot:no-results>
        Oops! Medicine doesn't exist!
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
  mdiCloseCircleOutline,
  mdiCheckboxMarked,
  mdiCheckboxBlankOutline,
  mdiContentSave,
  mdiCurrencyUsd,
  mdiCalendarAlert,
  mdiRenameBox
} from '@mdi/js'
export default {
  data: () => ({
    dialog: false,
    editedIndex: -1,
    editedItem: {
      name: '',
      quantity: 0,
      price: 0,
      expiry: '',
      availability: false
    },
    defaultItem: {
      name: '',
      quantity: 0,
      price: 0,
      expiry: '',
      availability: false
    },
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
    mdiCheckboxMarked,
    mdiCheckboxBlankOutline,
    mdiContentSave,
    mdiCurrencyUsd,
    mdiCalendarAlert,
    mdiRenameBox,
    page: 1,
    pageCount: 0,
    itemsPerPage: 5,
    search: '',
    loading: false,
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
    inventory: [
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
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Medicine Entry' : 'Edit Medicine'
    }
  },
  methods: {
    beginLoading() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 5000)
    },

    editItem(item) {
      this.editedIndex = this.inventory.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      const index = this.inventory.indexOf(item)
      confirm('Are you sure you want to delete this item?') &&
        this.inventory.splice(index, 1)
    },

    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.inventory[this.editedIndex], this.editedItem)
      } else {
        this.inventory.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
