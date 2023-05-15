<script lang="js">
  import { defineProps } from 'vue';
  import axios from 'axios';

  export default(await import('vue')).defineComponent({
    data(){
        return{
          hi: 'hi',
          pokemon: [],
        }
      },
      methods: {
        async fetchPokemon(){
          const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10');
          this.pokemon = res.data;
        }
      },
      async mounted() {
        await this.fetchPokemon();
      },

  })

</script>

<template>
  <div>
    <v-card>
      {{ pokemon }}
    </v-card>
  </div>
</template>

<style scoped>

</style>
