// Libraries
import Vuetify from 'vuetify'

// Component
import { mount, createLocalVue } from '@vue/test-utils'
import index from '../index'

// Utilities
const localVue = createLocalVue()

describe('index.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should render', (done) => {
    const wrapper = mount(index, {
      localVue,
      vuetify
    })

    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot()

    done()
  })
})
