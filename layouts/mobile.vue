<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" width="275px" app>
      <template v-slot:prepend>
        <v-list>
          <v-list-item to="/profile" two-line>
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
              <v-icon>{{ mdiAccount }}</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </template>

      <v-divider />

      <v-list nav dense>
        <v-list-item to="/dashboard">
          <v-list-item-icon>
            <v-icon>{{ mdiHome }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item to="/dashboard">
          <v-list-item-icon>
            <v-icon>{{ mdiDesktopMacDashboard }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item to="/employees">
          <v-list-item-icon>
            <v-icon>{{ mdiAccountGroup }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Employees</v-list-item-title>
        </v-list-item>
        <v-list-item to="/finance">
          <v-list-item-icon>
            <v-icon>{{ mdiCurrencyUsd }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Finance</v-list-item-title>
        </v-list-item>
        <v-list-item to="/settings">
          <v-list-item-icon>
            <v-icon>{{ mdiSettings }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
        <v-list-item to="/about">
          <v-list-item-icon>
            <v-icon>{{ mdiInformation }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-divider />
        <v-list>
          <v-list-item to="/signin">
            <v-list-item-icon>
              <v-icon color="secondary">
                {{ mdiLogout }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sign Out</v-list-item-title>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-btn color="black" icon @click.stop.prevent="drawer = !drawer">
        <v-icon>{{ mdiMenu }}</v-icon>
      </v-btn>
      <v-toolbar-title>x249 ERP</v-toolbar-title>
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
  mdiAccount,
  mdiHome,
  mdiDesktopMacDashboard,
  mdiAccountGroup,
  mdiCurrencyUsd,
  mdiSettings,
  mdiInformation,
  mdiLogout
} from '@mdi/js'
export default {
  data() {
    return {
      mdiMenu,
      mdiAccount,
      mdiHome,
      mdiDesktopMacDashboard,
      mdiAccountGroup,
      mdiCurrencyUsd,
      mdiSettings,
      mdiInformation,
      mdiLogout,
      drawer: false
    }
  }
}
</script>
