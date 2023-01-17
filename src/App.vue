<script>
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppCredits from './components/AppCredits.vue'
export default {
    components: {
        AppHeader,
        AppMain
    },
    data() {
        return {
            
}
}}
</script>

<template>
    <header>
        <AppHeader @searchMovie="[searchMovie(store.searchText), searchTvshow(store.searchText)]" />
    </header>

    <main>
        <AppMain />
        <AppCredits />
    </main>

</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variable' as *;
header{
    background-color: #0b0b0b;
    color: red
  }
</style>
