// Import the `mount()` method from Vue Test Utils
import { shallowMount } from '@vue/test-utils'
import editModal from '../../components/editModal.vue';

test('displays correct values', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = shallowMount(editModal, {
    propsData: {
        editedItem:{
          make : 'audi',
          model : 'model',
          year : '2000',
          colour : 'red',
          actions : ['remove']
      }
    }
  })

  const make = wrapper.find('#makeField')
  expect(make.exists()).toBe(true)
  console.log(make.value)


})