import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Registration from '@/components/Registration.vue'

describe('Registration.vue', () => {
  var wrapper

  beforeEach(function () {
    wrapper = shallowMount(Registration)
  })

  it('emits register person event', () => {
    const name = wrapper.find('#name')
    name.setValue('New User')

    const email = wrapper.find('#email')
    email.setValue('newuser@mail.com')

    const button = wrapper.find('#register')
    button.trigger('click')

    expect(wrapper.emitted().registerPerson.length).to.equal(1)

    expect(wrapper.emitted().registerPerson[0]).to.deep.equal([{ name: 'New User', email: 'newuser@mail.com' }])
  })

  it('shows error message when email is not correct', () => {
    const name = wrapper.find('#name')
    name.setValue('New User')

    const email = wrapper.find('#email')
    email.setValue('newuser.com')

    const button = wrapper.find('#register')
    button.trigger('click')

    expect(wrapper.find('.text-danger').exists()).to.eq(true)
  })

  it('does not emit register event when name is empty', () => {
    const name = wrapper.find('#name')
    name.setValue('')

    const email = wrapper.find('#email')
    email.setValue('newuser@mail.com')

    const button = wrapper.find('#register')
    button.trigger('click')

    console.log(wrapper.emitted())
    expect(wrapper.emitted()).to.deep.eq({})
  })
})
