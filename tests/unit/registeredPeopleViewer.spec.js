import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import RegisteredPeopleViewer from '@/views/RegisteredPeopleViewer.vue'

describe('RegisteredPeopleViewer.vue', () => {
  it('displays the correct values in the list', () => {
    const wrapper = shallowMount(RegisteredPeopleViewer, {
      propsData: {
        people: [{ name: 'Alice', email: 'alice@mail.com' }, { name: 'Bob', email: 'bob@mail.com' }]
      }
    })

    const listItems = wrapper.findAll('#list li')

    expect(listItems.length).to.equal(2)

    expect(listItems.wrappers.map(x => x.text()).reduce((prevString, current) => prevString + current)).to.contain('Alice')
  })
})
