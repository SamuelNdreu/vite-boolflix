<script>
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
    components: {
        AppHeader,
        AppMain
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <header>
        <AppHeader @searchMovie="[searchMovie(store.searchText), searchTvshow(store.searchText)]" />
    </header>

    <main>
        <AppMain />

    </main>

</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variable' as *;

header {
    background-color: #212529;
    
}
</style>
