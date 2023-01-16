<script>
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        searchMovie(searchText) {
            axios.get(" https://api.themoviedb.org/3/search/movie?api_key=56fe84a4653ee995f78bcfae8038ddd7", {
                params: {
                    query: searchText,
                    page: 1,
                    include_adult: false,
                }
            })
                .then((response) => {
                    console.log(response.data.results);
                    store.moviesList = response.data.results
                    console.log(store.moviesList);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        searchTvshow(searchText) {
            axios.get(" https://api.themoviedb.org/3/search/tv?api_key=56fe84a4653ee995f78bcfae8038ddd7", {
                params: {
                    query: searchText,
                    page: 1,
                    include_adult: false,
                }
            })
                .then((response) => {
                    console.log(response.data.results);
                    store.searchedTvshow = response.data.results
                    console.log(store.searchedTvshow);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    components: {
        AppHeader,
        AppMain
    },
}
</script>

<template>
    <AppHeader @searchMovie="[searchMovie(store.searchText), searchTvshow(store.searchText)]" />
    <AppMain />

</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variable' as *;
</style>
