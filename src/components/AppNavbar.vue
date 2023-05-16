<script>
    import image from '../assets/header-red.jpg';
    import logo from '../assets/pokeball-logo.png'

    export default(await import('vue')).defineComponent({
        data() {
            return{
                image: image,
                logo: logo,
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
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
    </v-app-bar>
</template>

<style scoped>
</style>