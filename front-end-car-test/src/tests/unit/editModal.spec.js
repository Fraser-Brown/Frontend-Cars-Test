// Import the `mount()` method from Vue Test Utils
import { shallowMount } from '@vue/test-utils'
import editModal from '../../components/editModal.vue';

test('displays correct values', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = shallowMount(editModal, {
    propsData: {
    }
  })

  const make = wrapper.find('#makeField')
  expect(make.exists()).toBe(true)
  const model = wrapper.find('#modelField')
  expect(model.exists()).toBe(true)
  const year = wrapper.find('#yearField')
  expect(year.exists()).toBe(true)
  const colour = wrapper.find('#colourField')
  expect(colour.exists()).toBe(true)
})