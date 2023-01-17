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
        getImagePath(imgName) {
            if (imgName !== 'da' && imgName !== 'de' && imgName !== 'en' && imgName !== 'fr' && imgName !== 'hi' && imgName !== 'it' && imgName !== 'ja' && imgName !== 'zh') {
                imgName = 'nc'
                return new URL(`../assets/imgs/${imgName}.png`, import.meta.url).href;
            } else {
                return new URL(`../assets/imgs/${imgName}.png`, import.meta.url).href;
            }
        }

    },
    created() {

    },
}
</script>

<template>
    <section class="container d-flex bg-dark text-light">
        <div class="row">
            <h2>Movies</h2>
            <div class="col-3 col-xs-3" v-for="movie in store.moviesList">
                <div class="img-wrapper">
                    <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" :alt="movie.title">
                    <div class="card-box">
                        <h4>
                            {{ movie.title }}
                        </h4>
                        <h5>
                            {{ movie.original_title }}
                        </h5>
                        <p>Language: <img class="flag" :src="getImagePath(movie.original_language)"
                                alt="Non disponibile"></p>
                        <p> Rating: <i class="fa-solid fa-star" v-for="n in (Math.ceil(movie.vote_average / 2))"></i>
                        </p>

                        <p class="overview">
                            Overview: {{ movie.overview }}
                        </p>
                    </div>
                </div>
            </div>
            <h2>Tv shows</h2>
            <div class="col-3 col-xs-3" v-for="tvShow in store.searchedTvshow">
                <div class="img-wrapper">
                    <img :src="`https://image.tmdb.org/t/p/w342/${tvShow.poster_path}`" :alt="tvShow.name">
                    <div class="card-box">
                        <h4>
                            {{ tvShow.name }}
                        </h4>
                        <h5>
                            <em>{{ tvShow.original_name }}</em>
                        </h5>
                        <p>Language: <img class="flag" :src="getImagePath(tvShow.original_language)"
                                alt="Non disponibile"></p>
                        <p> Rating: <i class="fa-solid fa-star" v-for="n in (Math.ceil(tvShow.vote_average / 2))"></i>
                        </p>
                        <p class="overview">
                            Overview: {{ tvShow.overview }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.overview {
    font-size: 0.8rem;
}

div.col-3 {
    position: relative;
    margin: 2rem;
}

.img-wrapper {
    position: relative;
}

img:hover {
    filter: opacity(10%);
}

.img-wrapper:hover .card-box {
    display: inline-block;
}

.card-box {
    width: 330px;
    text-align: center;
    position: absolute;
    bottom: 0px;
    left: 0px;
    display: none;
    color: rgb(255, 255, 255);
    // color: black;
    cursor: pointer;
}

img.flag {
    height: 30px;
}
</style>
