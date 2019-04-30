import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Home from '@/components/Home.vue'
import Registration from '@/components/Registration.vue'

describe('Home.vue', () => {
  it('updates people array when register person event is emitted', () => {
    const wrapper = mount(Home)

    const child = wrapper.find(Registration)

    child.vm.$emit('registerPerson', { name: 'Bob', email: 'bob@mail.com' })

    expect(wrapper.vm.registeredPeople).to.deep.eq([{ name: 'Bob', email: 'bob@mail.com' }])
  })
})
