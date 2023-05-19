<script lang="js">
    import axios from 'axios';

    export default(await import('vue')).defineComponent({
        data(){
            return{
                pokemon: [],
                imgUrl: '',
                gifUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/',
                nextUrl: '',
            }
        },
        props:{
            pokemon: Object
        },
        methods: {
            fetchPokemon(){
                const res = axios
                    .get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20')
                    .then((res) => {
                    sessionStorage.setItem("pokemon", JSON.stringify(res.data));
                    return this.pokemon = res.data;
                    })
                    .catch(error => {
                    console.log(error);
                });
            },
            fetchPrevNextPokemon(url){
                const res = axios
                    .get(url)
                    .then((res) => {
                        sessionStorage.setItem("pokemon", JSON.stringify(res.data));
                        return this.pokemon = res.data;
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },

        },
        async mounted() {
            if( sessionStorage.getItem("pokemon") === true){
                this.pokemon = sessionStorage.getItem("pokemon")
            } else{
                this.fetchPokemon();
            }
        },
    })

</script>

<template>
    <div v-if="pokemon">
        <div class="d-flex topFix flex-wrap justify-space-evenly" >
            <v-card class="pokeCard pa-2 ma-4" v-for="i in pokemon.results" :key="i.url">
                <p class="text-center text-uppercase pt-3 pb-2 mb-2 BCname text-h6">{{ i.name }}</p>
                <img class="ma-3" :src='gifUrl + i.url.match(/\/(\d+)\//)[1] + ".gif"' />
                <p class="text-right font-weight-medium mt-auto mb-0 indexNum">{{ i.url.match(/\/(\d+)\//)[1] }}</p>
            </v-card>
        </div>
        <div class="d-flex justify-space-between ma-8 mb-4">
            <v-btn @click="fetchPrevNextPokemon(pokemon.previous)" color="blue-grey">Prev.</v-btn>
            <v-btn @click="fetchPrevNextPokemon(pokemon.next)" color="blue-grey">Next</v-btn>
        </div>
    </div>
    <div v-else>
        no pokemon
    </div>
</template>

<style lang="scss" scoped>
    .pokeCard{
        width: 16rem;
        min-height: 14rem;
        text-align: center;
        img{
            width: 35%;
        }
        .indexNum{
            bottom: 1rem;
            position: absolute;
            right: 1rem;
        }
        .BCname{
            background-color: antiquewhite;
            border-radius: 10px;
        }
    }
</style>
