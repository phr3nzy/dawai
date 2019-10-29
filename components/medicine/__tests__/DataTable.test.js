// Libraries
import Vuetify from 'vuetify'

// Component
import { mount, createLocalVue } from '@vue/test-utils'
import DataTable from '../DataTable'

// Utilities
const localVue = createLocalVue()

describe('DataTable.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should render data table with static data', (done) => {
    const wrapper = mount(DataTable, {
      localVue,
      vuetify
    })

    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot()

    done()
  })
})
