<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light col-12">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link" id="homelink">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" id="aboutlink">About</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style>
@import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
</style>
