// Libraries
import Vuetify from 'vuetify'

// Component
import { mount, createLocalVue } from '@vue/test-utils'
import WelcomeSheet from '../WelcomeSheet'

// Utilities
const localVue = createLocalVue()

describe('WelcomeSheet.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should render the welcome sheet snapshot', (done) => {
    const wrapper = mount(WelcomeSheet, {
      localVue,
      vuetify
    })

    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot()

    done()
  })
})
