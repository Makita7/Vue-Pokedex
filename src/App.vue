<script lang="js">
  import { RouterView } from 'vue-router';
  import AppNavbar from './components/AppNavbar.vue';

  export default(await import('vue')).defineComponent({
    data(){
        return{
        }
      },
      methods: {
      },
      mounted() {
      },
      components:{
        AppNavbar,
      },
  })

</script>

<template>
  <v-app>
    <AppNavbar/>
    <v-card class="topFix elevation-0">
      <RouterView/>
    </v-card>
  </v-app>
</template>

<style lang="scss" scoped>
  .topFix{
    top: 64px;
  }
</style>
