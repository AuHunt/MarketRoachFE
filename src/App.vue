<template>
    <v-app style="height: 100vh">
        <!-- <v-navigation-drawer floating temporary></v-navigation-drawer> -->
        <AppBar />
        <MainLayout />
    </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'
import MainLayout from './components/main/MainLayout.vue'

export default {
    components: {
        AppBar,
        MainLayout,
    },
}
</script>
