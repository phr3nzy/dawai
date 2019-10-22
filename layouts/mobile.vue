<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" width="275px" app>
      <template v-slot:prepend>
        <v-list>
          <v-list-item active-class="primary--text" to="/profile" two-line>
            <v-list-item-avatar>
              <v-img
                src="https://avatars3.githubusercontent.com/u/16164793?s=400&u=c1453ab8a42a7ce9176eedb312eb2b51a0a1800e&v=4"
              />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">
                Osama Adil
              </v-list-item-title>
              <v-list-item-subtitle>Owner</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>{{ mdiAccountArrowRight }}</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </template>

      <v-divider />

      <v-list nav dense>
        <v-list-item active-class="primary--text" to="/">
          <v-list-item-icon>
            <v-icon>{{ mdiHome }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item active-class="primary--text" to="/dashboard">
          <v-list-item-icon>
            <v-icon>{{ mdiDesktopMacDashboard }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item active-class="primary--text" to="/medicine">
          <v-list-item-icon>
            <v-icon>{{ mdiPill }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Medicine</v-list-item-title>
        </v-list-item>
        <v-list-item active-class="primary--text" to="/finance">
          <v-list-item-icon>
            <v-icon>{{ mdiCashMultiple }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Finance</v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-divider />
        <v-list>
          <v-list-item active-class="primary--text" to="/signin">
            <v-list-item-icon>
              <v-icon color="danger">
                {{ mdiLogout }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sign Out</v-list-item-title>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-app-bar elevate-on-scroll app>
      <v-btn color="black" icon @click.stop.prevent="drawer = !drawer">
        <v-icon>{{ mdiMenu }}</v-icon>
      </v-btn>
      <v-toolbar-title>Dawai</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import {
  mdiMenu,
  mdiAccountArrowRight,
  mdiHome,
  mdiDesktopMacDashboard,
  mdiAccountGroup,
  mdiCashMultiple,
  mdiLogout,
  mdiPill
} from '@mdi/js'
export default {
  data() {
    return {
      mdiMenu,
      mdiAccountArrowRight,
      mdiHome,
      mdiDesktopMacDashboard,
      mdiAccountGroup,
      mdiCashMultiple,
      mdiLogout,
      mdiPill,
      drawer: false
    }
  }
}
</script>
