<template>
  <div class="home">
    <div class="row">
      <div class="col-12 p-4">
        <h2 class="text-center">Welcome to the registration page</h2>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-6">
        <Registration v-on:registerPerson="savePerson"/>
      </div>
      <div class="col-6">
        <RegisteredPeopleViewer v-bind:people="registeredPeople"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Registration from '@/components/Registration.vue'
import RegisteredPeopleViewer from '@/views/RegisteredPeopleViewer'

export default {
  name: 'home',
  components: {
    Registration,
    RegisteredPeopleViewer
  },
  data () {
    return {
      registeredPeople: []
    }
  },
  methods: {
    savePerson (person) {
      this.registeredPeople.push(person)
    }
  }
}
</script>
