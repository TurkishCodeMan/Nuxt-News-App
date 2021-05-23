<template>
  <div>

    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>{{message}}</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error', // you can set a custom layout for the error page
    head(){
        return{
            title:this.error.message
        }
    },
    computed:{
        message(){
            return this.error.message;
        }
    }

  }
</script>