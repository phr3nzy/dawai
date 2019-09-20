<template>
  <v-app>
    <v-navigation-drawer expand-on-hover permanent width="275px" app>
      <template v-slot:prepend>
        <v-list nav dense>
          <v-list-item active-class="primary--text" to="/profile" two-line>
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/85.jpg" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">
                John Adams
              </v-list-item-title>
              <v-list-item-subtitle>Manager</v-list-item-subtitle>
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
            <v-icon>{{ mdiDesktopMacDashboard }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item active-class="primary--text" to="/inventory">
          <v-list-item-icon>
            <v-icon>{{ mdiPill }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Inventory</v-list-item-title>
        </v-list-item>
        <v-list-item active-class="primary--text" to="/finance">
          <v-list-item-icon>
            <v-icon>{{ mdiFinance }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Finance</v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-divider />
        <v-list>
          <v-list-item to="/signin">
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
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import {
  mdiAccountArrowRight,
  mdiDesktopMacDashboard,
  mdiPill,
  mdiFinance,
  mdiLogout
} from '@mdi/js'
export default {
  data() {
    return {
      mdiAccountArrowRight,
      mdiDesktopMacDashboard,
      mdiPill,
      mdiFinance,
      mdiLogout
    }
  }
}
</script>
