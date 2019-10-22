<template>
  <v-row align="center" justify="center" dense>
    <v-col cols="12" xs="12" md="8" lg="6">
      <v-autocomplete
        v-model="selected"
        label="Search for Medicine"
        color="primary"
        :items="medicine"
        :filter="activeFilter"
        :append-icon="mdiChevronDown"
        :prepend-inner-icon="mdiCloudSearch"
        outlined
        rounded
      ></v-autocomplete>
      <v-btn-toggle v-model="model" mandatory shaped>
        <v-btn>
          Exact
          <v-icon right>{{ mdiBullseyeArrow }}</v-icon>
        </v-btn>

        <v-btn>
          Loose
          <v-icon right>{{ mdiFormatListBulletedType }}</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-col>
    <v-col v-if="selected" class="mt-12" cols="12" xs="12">
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
  mdiCloudSearch,
  mdiChevronDown,
  mdiBullseyeArrow,
  mdiFormatListBulletedType
} from '@mdi/js'
export default {
  inject: ['theme'],
  data() {
    return {
      selected: null,
      mdiCloudSearch,
      mdiChevronDown,
      mdiBullseyeArrow,
      mdiFormatListBulletedType,
      model: null,
      medicine: [
        'Panadol',
        'Panadol Extra',
        'Panadol Light',
        'Ibuprofen',
        'Ibuprofen Extra',
        'Paracetamol',
        'Super Paracetamol'
      ],
      filters: [
        {
          value: 0,
          fn: (item, queryText, itemText) => item.includes(queryText),
          text: 'Exact Match'
        },
        {
          value: 1,
          fn: (item, queryText, itemText) =>
            item.toLowerCase().includes(queryText),
          text: 'Loose Match'
        }
      ]
    }
  },

  computed: {
    activeFilter() {
      if (this.model == null) return undefined
      return this.filters[this.model].fn
    }
  }
}
</script>
