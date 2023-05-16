<script lang="js">
    import axios from 'axios';

    export default(await import('vue')).defineComponent({
        data(){
            return{
                pokemon: [],
                imgUrl: '',
                gifUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/',
            }
        },
        props:{
            pokemon: Object
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
    })

</script>

<template>
    <div class="d-flex topFix flex-wrap justify-space-evenly">
        <v-card class="pokeCard pa-2 ma-4" v-for="i in pokemon.results" :key="i.url">
            <p class="text-center text-capitalize mt-3">{{ i.name }}</p>
            <img class="ma-3" :src='gifUrl + i.url.slice(34, 36) + ".gif"' />
            <v-card-actions class="text-right">
                <v-spacer/>
                <p class="text-right font-weight-medium mt-auto mb-0">{{ i.url.slice(34, 36) }}</p>
            </v-card-actions>
        </v-card>
    </div>
</template>

<style lang="scss" scoped>
    .pokeCard{
        width: 16rem;
        min-height: 14rem;
        text-align: center;
        img{
        min-width: 3rem;
        }
    }
</style>
