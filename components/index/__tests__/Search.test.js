// Libraries
import Vuetify from 'vuetify'

// Component
import { mount, createLocalVue } from '@vue/test-utils'
import Search from '../Search'

// Utilities
const localVue = createLocalVue()

describe('Search.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should have a custom search and match snapshot', done => {
    const wrapper = mount(Search, {
      localVue,
      vuetify
    })

    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot()

    const alert = wrapper.find('v-alert')
    console.log(alert)

    expect(alert.text()).toBe('This is a demo')
    done()
  })
})
