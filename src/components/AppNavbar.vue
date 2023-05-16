<script>
    import image from '../assets/header-red.jpg';
    import logo from '../assets/pokeball-logo.png'
    import { RouterLink } from 'vue-router';

    export default(await import('vue')).defineComponent({
        data() {
            return{
                image: image,
                logo: logo,
                navItems: [
                    { title: 'Pokemon', to: '/' },
                    { title: 'Berries', to: '/berries' },
                    { title: 'Contests', to: '/contest' },
                    { title: 'TM Machines', to: '/tm_machines' },
                ],
            }
        },
    })
</script>

<template>
    <v-app-bar
        color="deep-orange-accent-4"
        scroll-behavior="elevate"
    >
        <template v-slot:image>
            <v-img
                :src="image"
                cover
            ></v-img>
        </template>
        <div class="d-flex align-center">
            <img class="ml-4 mr-2" style="height: 2.5rem;" :src="logo"/>
        <v-app-bar-title>Pokédex</v-app-bar-title>

        </div>

        <v-spacer/>

        <template v-slot:append>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
                </template>
                <v-list>
                    <v-list-item
                        v-for="(item, index) in navItems"
                        :key="index"
                        :value="index"
                        :to="item.to"
                    >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </template>
    </v-app-bar>
</template>

<style scoped>
</style>