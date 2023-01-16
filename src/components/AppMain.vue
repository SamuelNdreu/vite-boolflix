<script>
import { store } from '../store.js'
import LangFlag from 'vue-lang-code-flags';

export default {
    name: 'AppMain',
    components: {
        LangFlag,
    },
    data() {
        return {
            store,
        }
    },
    methods: {

},
    created() {
        
    },
}
</script>

<template>
    <section class="container d-flex">
        <div class="row  ">
            <h2>Movies</h2>
            <div class="col-4 col-xs-4" v-for="movie in store.moviesList">
                <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" :alt="movie.title">
                <h4>
                    {{ movie.title }}
                </h4>
                <h5>
                    {{ movie.original_title }}
                </h5>
                <p>Language: <lang-flag :iso="movie.original_language" /></p>
                <p>Rating: {{ Math.ceil(movie.vote_average / 2) }}</p>
            </div>

            <h2>Tv shows</h2>
        </div>

    </section>
</template>


<style lang="scss" scoped>
</style>
