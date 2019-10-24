<template>
  <v-card class="mt-10 pb-5 slight-br" outlined flat>
    <v-sheet
      class="text-center v-sheet--offset mx-auto py-8 heavy-br"
      color="primary"
      min-height="100px"
      max-width="calc(100% - 64px)"
      elevation="6"
      dark
    >
      <span class="display-2 font-weight-thin">Medicine</span>
    </v-sheet>
    <v-card-title>
      <v-row class="mx-5" align="center" justify="center">
        <v-text-field
          v-model="search"
          label="Search Medcine"
          type="text"
          :clear-icon="mdiClose"
          :disabled="loading"
          :prepend-inner-icon="mdiMagnify"
          clearable
          outlined
          rounded
        ></v-text-field>
        <v-spacer></v-spacer>

        <v-btn
          large
          text
          color="primary"
          :disabled="loading"
          :loading="loading"
          rounded
          @click.stop.prevent="beginLoading"
          >Refresh <v-icon right>{{ mdiRefresh }}</v-icon></v-btn
        >
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }"
            ><v-btn
              :disabled="loading"
              large
              text
              color="primary"
              rounded
              v-on="on"
              >Add Item <v-icon right>{{ mdiPlusCircleOutline }}</v-icon></v-btn
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
                    label="Item Name"
                    :prepend-inner-icon="mdiRenameBox"
                    type="text"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="editedItem.price"
                    label="Price"
                    type="number"
                    :prepend-inner-icon="mdiCurrencyUsd"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-menu
                    ref="menu1"
                    v-model="menu1"
                    :close-on-content-click="false"
                    :return-value.sync="editedItem.productionDate"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="editedItem.productionDate"
                        label="Production Date"
                        :prepend-inner-icon="mdiCalendarClock"
                        readonly
                        outlined
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="editedItem.productionDate"
                      :next-icon="mdiChevronRight"
                      :prev-icon="mdiChevronLeft"
                      no-title
                      scrollable
                    >
                      <div class="flex-grow-1"></div>
                      <v-btn text color="primary" @click="menu1 = false"
                        >Cancel</v-btn
                      >
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu1.save(editedItem.productionDate)"
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-menu
                    ref="menu2"
                    v-model="menu2"
                    :close-on-content-click="false"
                    :return-value.sync="editedItem.expiry"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="editedItem.expiry"
                        label="Expiry Date"
                        :prepend-inner-icon="mdiCalendarAlert"
                        readonly
                        outlined
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="editedItem.expiry"
                      :next-icon="mdiChevronRight"
                      :prev-icon="mdiChevronLeft"
                      no-title
                      scrollable
                    >
                      <div class="flex-grow-1"></div>
                      <v-btn text color="primary" @click="menu2 = false"
                        >Cancel</v-btn
                      >
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu2.save(editedItem.expiry)"
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="editedItem.category"
                    :items="inventoryCategories"
                    label="Category"
                    type="text"
                    :append-icon="mdiChevronDown"
                    :prepend-inner-icon="mdiShapeOutline"
                    outlined
                  ></v-select>
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
                <v-col cols="6">
                  <v-checkbox
                    v-model="editedItem.availability"
                    label="Available"
                    color="primary"
                    :on-icon="mdiCheckboxMarkedCircleOutline"
                    :off-icon="mdiCheckboxBlankCircleOutline"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6">
                  <v-checkbox
                    v-model="editedItem.perscription"
                    label="Requires Perscription"
                    color="primary"
                    :on-icon="mdiCheckboxMarkedCircleOutline"
                    :off-icon="mdiCheckboxBlankCircleOutline"
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
      </v-row>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="inventory"
      :page.sync="page"
      :search="search"
      :loading="loading"
      :loading-text="'Refreshing your inventory...'"
      multi-sort
      hide-default-footer
      @page-count="pageCount = $event"
    >
      <template v-slot:item.perscription="{ item }">
        <v-tooltip v-if="item.perscription" bottom>
          <template v-slot:activator="{ on }">
            <v-chip color="transparent" dark v-on="on">
              <v-icon color="warning">{{ mdiAlertCircle }}</v-icon>
            </v-chip>
          </template>
          <span>Required</span>
        </v-tooltip>
        <v-tooltip v-else bottom>
          <template v-slot:activator="{ on }">
            <v-chip color="transparent" dark v-on="on">
              <v-icon color="rgb(128,128,128)">{{ mdiCloseCircle }}</v-icon>
            </v-chip>
          </template>
          <span>Not Required</span>
        </v-tooltip>
      </template>
      <template v-slot:item.expiry="{ item }">
        <v-progress-linear
          v-if="getExpiry(item.productionDate, item.expiry) >= 75"
          color="green lighten-1"
          height="10"
          rounded
          striped
          :value="getExpiry(item.productionDate, item.expiry)"
        ></v-progress-linear>
        <v-progress-linear
          v-else-if="
            getExpiry(item.productionDate, item.expiry) <= 74 &&
              getExpiry(item.productionDate, item.expiry) >= 35
          "
          color="orange darken-1"
          height="10"
          rounded
          striped
          :value="getExpiry(item.productionDate, item.expiry)"
        ></v-progress-linear>
        <v-progress-linear
          v-else
          color="red darken-1"
          height="10"
          rounded
          striped
          :value="getExpiry(item.productionDate, item.expiry)"
        ></v-progress-linear>
      </template>
      <template v-slot:item.price="{ item }">
        <span>{{ item.price }} <sup>SDG</sup></span>
      </template>
      <template v-slot:item.availability="{ item }">
        <v-tooltip v-if="item.availability" bottom>
          <template v-slot:activator="{ on }">
            <v-chip color="transparent" dark v-on="on">
              <v-icon color="success">{{ mdiCheckCircle }}</v-icon>
            </v-chip>
          </template>
          <span>Available</span>
        </v-tooltip>
        <v-tooltip v-else bottom>
          <template v-slot:activator="{ on }">
            <v-chip color="transparent" dark v-on="on">
              <v-icon color="danger">{{ mdiCloseCircle }}</v-icon>
            </v-chip>
          </template>
          <span>Unavailable</span>
        </v-tooltip>
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
        Oops! Item doesn't exist!
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
  mdiChevronDown,
  mdiRefresh,
  mdiMagnify,
  mdiClose,
  mdiCheckCircle,
  mdiCloseCircle,
  mdiCheckboxMarkedCircleOutline,
  mdiCheckboxBlankCircleOutline,
  mdiContentSave,
  mdiCurrencyUsd,
  mdiCalendarAlert,
  mdiRenameBox,
  mdiShapeOutline,
  mdiCalendarClock,
  mdiAlertCircle
} from '@mdi/js'
export default {
  data: () => ({
    dialog: false,
    editedIndex: -1,
    editedItem: {
      name: '',
      category: '',
      perscription: false,
      quantity: 0,
      price: 0,
      productionDate: '',
      expiry: '',
      availability: false
    },
    defaultItem: {
      name: '',
      category: '',
      perscription: false,
      quantity: 0,
      price: 0,
      productionDate: '',
      expiry: '',
      availability: false
    },
    mdiChevronRight,
    mdiChevronLeft,
    mdiPencil,
    mdiDeleteForever,
    mdiPlusCircleOutline,
    mdiChevronDown,
    mdiRefresh,
    mdiMagnify,
    mdiClose,
    mdiCheckCircle,
    mdiCloseCircle,
    mdiCheckboxMarkedCircleOutline,
    mdiCheckboxBlankCircleOutline,
    mdiContentSave,
    mdiCurrencyUsd,
    mdiCalendarAlert,
    mdiRenameBox,
    mdiShapeOutline,
    mdiCalendarClock,
    mdiAlertCircle,
    menu1: false,
    menu2: false,
    page: 1,
    pageCount: 0,
    search: '',
    loading: false,
    inventoryCategories: [
      'Pill',
      'Powder',
      'Cream',
      'Natural',
      'Paste',
      'Injection',
      'Inhalative',
      'Drop',
      'Suppository',
      'Other'
    ],
    headers: [
      {
        text: 'Name',
        align: 'left',
        value: 'name'
      },
      { text: 'Category', align: 'center', value: 'category' },
      {
        text: 'Requires Perscription',
        align: 'center',
        value: 'perscription'
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
        category: 'Pill',
        perscription: false,
        quantity: 15,
        price: 40,
        productionDate: '2018-01-01',
        expiry: '2020-01-01',
        availability: true
      },
      {
        name: 'Ibuprofen',
        category: 'Pill',
        perscription: false,
        quantity: 28,
        price: 60,
        productionDate: '2018-01-01',
        expiry: '2020-01-01',
        availability: true
      },
      {
        name: 'Paracetamol',
        category: 'Pill',
        perscription: false,
        quantity: 43,
        price: 55,
        productionDate: '2019-01-01',
        expiry: '2020-01-01',
        availability: true
      },
      {
        name: 'Panadol Extra',
        category: 'Pill',
        perscription: true,
        quantity: 89,
        price: 800,
        productionDate: '2019-09-01',
        expiry: '2020-01-01',
        availability: false
      },
      {
        name: 'Panadol Lite',
        category: 'Pill',
        perscription: true,
        quantity: 99,
        price: 1200,
        productionDate: '2019-06-01',
        expiry: '2020-01-01',
        availability: false
      }
    ]
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item Entry' : 'Edit Item'
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
    },

    getExpiry(productionDate, expiryDate) {
      const oneDay = 1000 * 60 * 60 * 24
      const duration = Math.abs(
        Math.round((new Date(expiryDate) - new Date(productionDate)) / oneDay)
      )
      const now = Math.abs(
        Math.round((new Date(productionDate) - new Date()) / oneDay)
      )
      return 100 - Math.round((now / duration) * 100)
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
