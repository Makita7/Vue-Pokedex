<script lang="js">
  import axios from 'axios';
  import { RouterView } from 'vue-router';
  import AppNavbar from './components/AppNavbar.vue';

  export default(await import('vue')).defineComponent({
    data(){
        return{
          hi: 'hi',
          pokemon: [],
        }
      },
      methods: {
        // async fetchPokemon(){
        //   const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10');
        //   this.pokemon = res.data;
        // }
      },
      // async mounted() {
      //   if( this.pokemon.length !== 0 ){
      //     await this.fetchPokemon();
      //   }
      // },
      components:{
        AppNavbar,
      },
  })

</script>

<template>
  <v-app>
    <AppNavbar/>
    <v-card>
      <p v-for="i in pokemon.results" :key="i.url">{{ i.name }}</p>
    </v-card>
    <v-card class="mt-8">
      <RouterView/>

    </v-card>
  </v-app>
</template>

<style scoped>

</style>
