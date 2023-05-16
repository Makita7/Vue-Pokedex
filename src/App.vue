<script lang="js">
  import axios from 'axios';
  import { RouterView } from 'vue-router';
  import AppNavbar from './components/AppNavbar.vue';

  export default(await import('vue')).defineComponent({
    data(){
        return{
          hi: 'hi',
          pokemon: [],
          imgUrl: '',
          gifUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/',
        }
      },
      methods: {
        async fetchPokemon(){
          const res = await axios
            .get('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10')
            .then((res) => {
              sessionStorage.setItem("pokemon", JSON.stringify(res.data));
              return this.pokemon = res.data;
            })
            .catch(error => {
              console.log(error);
            });
        },
      },
      async mounted() {
        if( sessionStorage.getItem("pokemon") ){
          this.pokemon = JSON.parse(sessionStorage.getItem("pokemon"))
        } else{
          await this.fetchPokemon();
        }
      },
      components:{
        AppNavbar,
      },
  })

</script>

<template>
  <v-app>
    <AppNavbar/>
    <div class="d-flex mt-16 pt-4 topFix flex-wrap justify-space-evenly">
      <v-card class="pokeCard pa-2 ma-4" v-for="i in pokemon.results" :key="i.url">
        <p class="text-center text-capitalize mt-3">{{ i.name }}</p>
        <img class="ma-3" :src='gifUrl + i.url.slice(34, 36) + ".gif"' />
        <v-card-actions class="text-right">
          <v-spacer/>
          <p class="text-right font-weight-medium mt-auto mb-0">{{ i.url.slice(34, 36) }}</p>
        </v-card-actions>
      </v-card>
    </div>
    <v-card class="mt-8">
      <RouterView/>
    </v-card>
  </v-app>
</template>

<style lang="scss" scoped>
  .topFix{
    top: 64px;
  }
  .pokeCard{
    width: 16rem;
    height: 14rem;
    text-align: center;
    img{
      min-width: 3rem;
    }
  }
</style>
