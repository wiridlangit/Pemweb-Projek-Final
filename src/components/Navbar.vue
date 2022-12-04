<template>
    <nav class="flex items-center justify-between">
      <h1 class="text-2xl">Pemweb FP Kelompok Pemdat</h1>
  
      <!-- for all users -->
      <!-- <div class="">
        <router-link to="/">Home</router-link>
      </div> -->
  
      <!-- for logged in users -->
      <div class="flex space-x-4">
        <button v-on:click="logout" >Logout</button>
      </div>
  
      <!-- for logged out users -->
      <div class="flex space-x-4">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    methods:{
      logout()
      {
        localStorage.clear();
        this.$router.push({name:'Login'})
      }
    }
  }
  </script>