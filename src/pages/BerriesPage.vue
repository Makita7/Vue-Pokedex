<script lang="js">
    import axios from 'axios';
    import { defineComponent } from 'vue';
    import cheri from '../assets/berries/cheri.png';

    export default defineComponent({
        data(){
            return{
                berries: [],
                dialog: false,
                dialogData: [],
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
            OpenDialog(url){
                const res = axios
                    .get(url)
                    .then( res => {
                        return this.dialogData = res.data;
                    })
                    .catch( err => {
                        console.log(err);
                    })
                this.dialog = true;
            },
            CloseDialog(){
                this.dialog = false;
                this.dialogData = [];
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
            <v-card v-for="b in berries.results" :key='b.name + " berry"' class="pa-2 ma-4 berryCard" @click="OpenDialog(b.url)">
                <p class="text-capitalize mb-4">{{b.name}}</p>
                <!-- <img :src=' "../assets/berries/" + b.name + ".png" ' :alt="b.name" /> -->
                <img src="../assets/berries/cheri.png"/>
            </v-card>
        </div>
        <div class="d-flex justify-space-between ma-8 mb-4">
            <v-btn @click="fetchPrevNextBerries(berries.previous)" color="blue-grey" >Prev.</v-btn>
            <v-btn @click="fetchPrevNextBerries(berries.next)" color="blue-grey" >Next</v-btn>
        </div>


        <v-dialog
            v-model="dialog"
            width="60%"
        >
            <v-card v-if="dialogData" class="pa-3">

                <div>

                    <v-card-title class="text-h5 text-capitalize d-flex">
                        {{ dialogData.name }} Berry
                        <p class="text-subtitle-1 ml-auto id">{{ dialogData.id }}</p>
                    </v-card-title>

                    <v-card-text>
                        <div class="d-flex justify-space-between">
                            <div class="col">
                                <p class=""><b>Size: </b>{{ dialogData.size }}</p>
                                <p class=""><b>Soil Dryness: </b>{{ dialogData.soil_dryness }}</p>
                            </div>
                            <div class="col">
                                <p><b>Max Harvest: </b>{{ dialogData.max_harvest }}</p>
                                <p><b>Growth Times: </b>{{ dialogData.growth_time }}</p>
                            </div>
                            <div class="col">
                                <!-- <p><b>Firmness: </b>{{ dialogData.firmness.name }}</p> -->
                                <p><b>Smoothness: </b>{{ dialogData.smoothness }}</p>
                            </div>
                        </div>
                        <v-divider class="mt-4" />


                        <div class=" d-flex flavors justify-center mt-4">
                            <div v-for="i in dialogData.flavors" :key="i.flavor + '_' + i.id" class="ma-4">
                                <div class="d-flex font-weight-medium pill" :class="i.flavor.name">
                                    <p class="mr-2 text-capitalize">{{ i.flavor.name }}</p>
                                    <p>{{ i.potency }}</p>
                                </div>

                            </div>
                        </div>

                    </v-card-text>

                    <v-card-actions>
                        <v-spacer/>

                        <v-btn color="blue-grey" @click="CloseDialog()" >
                            Close
                        </v-btn>
                    </v-card-actions>

                </div>

            </v-card>
            <v-card v-else>
                <v-sheet
                    :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                    class="pa-3"
                >
                    <v-skeleton-loader
                    class="mx-auto"
                    loading
                    max-width="300"
                    type="card"
                    ></v-skeleton-loader>
                </v-sheet>
            </v-card>
        </v-dialog>


    </div>
    <div v-else> no berries</div>
</template>

<style scoped lang="scss">
    .berryCard{
        width: 16rem;
        min-height: 14rem;
        text-align: center;
        img{
            width: 30%;
        }
    }
    .id{
        background-color: #7e7e7e;
        padding: 0.1rem 0.7rem;
        border-radius: 40px;
        color: white;
        font-weight: bold;
    }
    .flavors{
        .pill{
            border-radius: 30px;
            padding: 0.2rem 1rem;
        }
        .spicy{
            background-color: #F08030;
            color: white;
        }
        .dry{
            background-color: #6890F0;
            color: white;
        }
        .sweet{
            background-color: #F85888;
            color: white;
        }
        .bitter{
            background-color: #78C850;
            color: white;
        }
        .sour{
            background-color: #F8D030;
            color: white;
        }

    }
</style>