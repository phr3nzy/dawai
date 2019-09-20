<template>
  <v-layout align-center justify-center column>
    <v-flex xs12>
      <v-card :loading="loading" flat outlined width="500px">
        <div class="pa-4">
          <v-img
            contain
            height="200"
            :aspect-ratio="16 / 9"
            src="/logo-1024-transparent.svg"
          ></v-img>
        </div>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card-text class="pa-5">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              type="email"
              label="Email"
              :prepend-inner-icon="mdiEmail"
              outlined
            />
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              type="password"
              label="Password"
              :prepend-inner-icon="mdiLock"
              outlined
            />
            <nuxt-link to="/">
              Forgot password?
            </nuxt-link>
          </v-card-text>
          <v-card-actions class="px-5">
            <v-checkbox
              v-model="check"
              color="primary"
              label="Keep me signed in"
              :on-icon="mdiCheckboxMarked"
              :off-icon="mdiCheckboxBlankOutline"
            />
            <v-spacer />
            <v-btn
              color="primary"
              type="submit"
              large
              @click.stop.prevent="signin"
            >
              Sign In
              <v-icon right>
                {{ mdiLogin }}
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import {
  mdiEmail,
  mdiLock,
  mdiClose,
  mdiCheckboxMarked,
  mdiCheckboxBlankOutline,
  mdiLogin
} from '@mdi/js'
export default {
  layout: () => 'none',
  // middleware: 'no-auth',
  head: () => ({
    title: 'Sign In'
  }),
  data: () => ({
    mdiEmail,
    mdiLock,
    mdiClose,
    mdiCheckboxMarked,
    mdiCheckboxBlankOutline,
    mdiLogin,
    check: true,
    valid: true,
    loading: false,
    email: '',
    password: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [(v) => !!v || 'Password is required']
  }),
  methods: {
    signin() {
      if (this.$refs.form.validate()) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.$router.push('/')
        }, 3000)
      }
    }
  }
}
</script>
