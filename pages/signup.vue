<template>
  <v-container fluid grid-list-xs>
    <v-layout fill-height row wrap justify-center align-center>
      <v-flex xs12>
        <v-card class="mx-auto" :loading="loading" max-width="500">
          <v-card-title class="title font-weight-regular justify-space-between">
            <span>{{ currentTitle }}</span>
            <v-avatar
              color="primary lighten-2"
              class="subheading white--text"
              size="28"
              v-text="step"
            ></v-avatar>
          </v-card-title>

          <v-window v-model="step">
            <v-window-item :value="1">
              <v-card-text>
                <v-text-field
                  v-model="email"
                  :clear-icon="mdiClose"
                  clearable
                  outlined
                  label="Email"
                  :prepend-inner-icon="mdiEmail"
                  hint="This is the email you will use to login to your Dawai account"
                  :persistent-hint="false"
                ></v-text-field>
                <span class="caption grey--text text--darken-1">
                  By clicking next you agree to our
                  <nuxt-link to="/terms">Terms and Conditions</nuxt-link>.
                </span>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="2">
              <v-card-text>
                <v-text-field
                  v-model="password"
                  label="Password"
                  :prepend-inner-icon="mdiShieldLock"
                  :clear-icon="mdiClose"
                  clearable
                  outlined
                  type="password"
                ></v-text-field>
                <v-text-field
                  v-model="secondPassword"
                  label="Confirm Password"
                  :prepend-inner-icon="mdiShieldLockOutline"
                  :clear-icon="mdiClose"
                  clearable
                  outlined
                  type="password"
                ></v-text-field>
                <span class="caption grey--text text--darken-1">
                  Enter a strong, 8 minimum character password twice
                </span>
              </v-card-text>
            </v-window-item>

            <v-window-item :value="3">
              <div class="pa-4 text-center">
                <v-img
                  class="mb-4"
                  contain
                  height="200"
                  src="/logo-1024-transparent.svg"
                ></v-img>
                <h3 class="title font-weight-light mb-2">Welcome to Dawai</h3>
                <span class="caption grey--text"
                  >Thanks for signing up! We'll get back to you via E-mail for
                  account activation.</span
                >
              </div>
            </v-window-item>
          </v-window>

          <!-- <v-divider></v-divider> -->

          <v-card-actions class="px-6">
            <v-btn :disabled="step === 1" large text @click="step--">
              Back
            </v-btn>
            <div class="flex-grow-1"></div>
            <v-btn
              :disabled="step === 3"
              color="primary"
              large
              depressed
              @click="nextStep"
            >
              {{ step === 3 ? 'Finished!' : 'Next' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {
  mdiEmail,
  mdiClose,
  mdiShieldLock,
  mdiShieldLockOutline
} from '@mdi/js'
export default {
  layout: 'none',
  head: () => ({
    title: 'Sign Up',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Sign Up for using the Dawai Pharmacy Management Software'
      }
    ]
  }),
  data: () => ({
    mdiEmail,
    mdiClose,
    mdiShieldLock,
    mdiShieldLockOutline,
    step: 1,
    loading: false,
    email: '',
    password: '',
    secondPassword: ''
  }),

  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return 'Sign-up'
        case 2:
          return 'Create a password'
        default:
          return 'Account created!'
      }
    }
  },

  methods: {
    nextStep() {
      this.loading = true
      setTimeout(() => {
        this.step++
        this.loading = false
      }, 2000)
    }
  }
}
</script>
