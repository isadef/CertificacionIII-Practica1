<template>
  <div class="border border-light m-5">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center">Register a new user</h2>
      </div>
    </div>
    <hr>
    <form>
      <div class="row">
        <div class="col-3">
          <label for="name">Name: </label>
        </div>
        <div class="col-9">
          <input type="text" id="name" name="name" v-model="person.name">
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <label for="email">Email: </label>
        </div>
        <div class="col-9">
          <input type="text" id="email" name="email" v-model="person.email">
        </div>
      </div>
      <div class="row">
        <div class="col-6 offset-3 p-3">
          <button type="button" class="btn btn-primary" @click="addNewPerson" id="register">Register</button>
        </div>
      </div>
      <div class="row" v-if="errors">
        <div class="col-12 text-danger">
          Please correct errors before submitting
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data () {
    return {
      person: { name: '', email: '' },
      errors: false
    }
  },
  methods: {
    addNewPerson () {
      if (this.validateForm()) {
        this.$emit('registerPerson', this.person)
      }
    },
    validateForm () {
      if (this.person.name !== '' && this.isValidEmail(this.person.email)) {
        this.errors = false
        return true
      }
      this.errors = true
      return false
    },
    isValidEmail (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
