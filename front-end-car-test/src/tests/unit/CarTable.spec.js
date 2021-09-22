// Import the `mount()` method from Vue Test Utils
import { shallowMount } from '@vue/test-utils'
import CarTable from '../../components/CarTable.vue';

test('displays message', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = mount(CarTable, {
    propsData: {
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello world')
})