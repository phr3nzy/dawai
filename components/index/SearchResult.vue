<template>
  <v-col cols="12" sm="12" md="12" lg="12" xl="12">
    <v-list class="my-5 slight-br" dense rounded two-line>
      <template v-for="pharmacy in pharmacies" :id="pharmacy.id">
        <v-list-item :key="pharmacy.id">
          <v-list-item-avatar>
            <v-img
              :src="`https://api.adorable.io/avatars/50/${pharmacy.name}.png`"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ pharmacy.name }}</v-list-item-title>
            <v-list-item-subtitle
              >Available
              <v-icon color="success" right>{{
                mdiCheckCircle
              }}</v-icon></v-list-item-subtitle
            >
          </v-list-item-content>
          <v-btn color="primary" large icon
            ><v-icon>{{ mdiDirections }}</v-icon></v-btn
          >
        </v-list-item>
      </template>
    </v-list>
    <div id="map-wrap" style="height: 50vh">
      <client-only>
        <l-map :zoom="16" :center="[15.5482567, 32.5651013]">
          <l-tile-layer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-marker
            v-for="pharmacy in pharmacies"
            :key="pharmacy.id"
            :lat-lng="[pharmacy.lat, pharmacy.lng]"
          >
            <l-popup>{{ pharmacy.name }}</l-popup>
          </l-marker>
        </l-map>
      </client-only>
    </div>
  </v-col>
</template>

<script>
import { mdiCheckCircle, mdiDirections } from '@mdi/js'
export default {
  props: {
    pharmacies: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      mdiCheckCircle,
      mdiDirections
    }
  }
}
</script>
