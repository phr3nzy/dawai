// Libraries
import Vuetify from 'vuetify'

// Component
import { mount, createLocalVue } from '@vue/test-utils'
import SkeletonLoading from '../SkeletonLoading'

// Utilities
const localVue = createLocalVue()

describe('SkeletonLoading.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should mount the skeleton loaders and compare snapshots', (done) => {
    const wrapper = mount(SkeletonLoading, {
      localVue,
      vuetify
    })

    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot()
    done()
  })
})
