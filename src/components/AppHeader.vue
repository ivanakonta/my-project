<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Student's Portal</router-link>
        <div class="d-flex">
          <router-link to="/dodaj-studenta" class="btn btn-outline-light">
              + Dodaj Studenta
          </router-link>
      </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "AppHeader",
  };
  </script>