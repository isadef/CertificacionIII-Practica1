<template>
  <div class="container m-5">
    <h3>{{ people.length}} people were registered here</h3>
    <ul id="list">
      <li v-for="(person, index) in people" :key="index">
          {{person.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    people: Array
  }
}
</script>
