// Import the `mount()` method from Vue Test Utils
import { mount } from '@vue/test-utils'
import CarTable from '../../components/CarTable.vue';

test('displays correctly', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = mount(CarTable, {
    propsData: {
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Create new Entry')
  expect(wrapper.text()).toContain('Search')
  expect(wrapper.text()).toContain('Table')

  const newEntry = wrapper.find('#newEntry')
  expect(newEntry.exists()).toBe(true)
  const newEntryMake = wrapper.find('#entryMake')
  expect(newEntryMake.exists()).toBe(true)
  const newEntryModel = wrapper.find('#entryModel')
  expect(newEntryModel.exists()).toBe(true)
  const newEntryYear = wrapper.find('#entryYear')
  expect(newEntryYear.exists()).toBe(true)
  const newEntryColour = wrapper.find('#entryColour')
  expect(newEntryColour.exists()).toBe(true)
  const newEntrySubmit = wrapper.find('#submitButton')
  expect(newEntrySubmit.exists()).toBe(true)

  const carTable = wrapper.find('#carTable')
  expect(carTable.exists()).toBe(true)
})