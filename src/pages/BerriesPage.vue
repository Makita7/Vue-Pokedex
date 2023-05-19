<script lang="js">
    import axios from 'axios';
    import { defineComponent } from 'vue';
    import cheri from '../assets/berries/cheri.png';

    export default defineComponent({
        data(){
            return{
                berries: [],
            }
        },
        methods: {
            fetchBerries(){
                const res = axios
                    .get('https://pokeapi.co/api/v2/berry')
                    .then( res => {
                        sessionStorage.setItem("berries", JSON.stringify(res.data));
                        return this.berries = res.data;
                    })
                    .catch( error => {
                        console.log(error);
                    });
            },
            fetchPrevNextBerries(url){
                const res = axios
                    .get(url)
                    .then( res => {
                        sessionStorage.setItem("berries", JSON.stringify(res.data));
                        return this.berries = res.data;
                    })
                    .catch( error => {
                        console.log(error);
                    })
            },
        },
        mounted() {
            if(sessionStorage.getItem( "berries") === true ){
                this.berries = JSON.parse(sessionStorage.getItem("berries"));
            } else {
                this.fetchBerries();
            }
        },
    })


</script>

<template>
    <div v-if="berries">
        <div class="d-flex topFix flex-wrap justify-space-evenly" >
            <v-card v-for="b in berries.results" :key='b.name' class="pa-2 ma-4 berryCard">
                <p>{{b.name}}</p>
                {{ b.url.match(/\/(\d+)\//)[1] }}
                {{ "../assets/berries/" + b.name + ".png" }}
                <v-img :src='"../assets/berries/"+b.name+".png"' :alt="b.name"/>
            </v-card>
        </div>
        <div class="d-flex justify-space-between ma-8 mb-4">
            <v-btn @click="fetchPrevNextBerries(berries.previous)" color="blue-grey" >Prev.</v-btn>
            <v-btn @click="fetchPrevNextBerries(berries.next)" color="blue-grey" >Next</v-btn>
        </div>
    </div>
    <div v-else> no berries</div>
</template>

<style scoped lang="scss">
    .berryCard{
        width: 16rem;
        min-height: 14rem;
        text-align: center;
    }
</style>