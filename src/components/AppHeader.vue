<script>
import axios from 'axios';
import { store } from '../store.js'
export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            apiKey: '56fe84a4653ee995f78bcfae8038ddd7',
            apiUri: 'https://api.themoviedb.org/3/search/movie',
            apiUriTvShows: 'https://api.themoviedb.org/3/search/tv',
            apiFindActor: "https://api.themoviedb.org/3/search/person"
        }
    },
    methods: {
        getMovies(searchedQuery) {
            //chiamata API
            axios.get(this.apiUri, {
                params: {
                    api_key: this.apiKey,
                    query: searchedQuery
                }

            })
                .then((response) => {
                    console.log(response.data.results);
                    this.store.moviesList = response.data.results;
                })
                .catch(function (error) {
                    console.warn(error)
                });

        },
        getTvShows(searchedQuery) {
            //chiamata API
            axios.get(this.apiUriTvShows, {
                params: {
                    api_key: this.apiKey,
                    query: searchedQuery
                }

            })
                .then((response) => {
                    console.log(response.data.results);
                    this.store.searchedTvshow = response.data.results;
                })
                .catch(function (error) {
                    console.warn(error)
                });

        },

        getActors(searchedQuery) {
            //chiamata API
            axios.get(this.apiFindActor, {
                params: {
                    api_key: this.apiKey,
                    query: searchedQuery
                }

            })
                .then((response) => {
                    console.log(response.data.results);
                    this.store.searchedTvActors = response.data.results;
                })
                .catch(function (error) {
                    console.warn(error)
                });

        },




        getApi(search) {
            this.getTvShows(search);
            this.getMovies(search);
            this.getActors(search)
        }

    },
    created() {
        this.getMovies();
        this.getTvShows;
    },
}
</script>

<template>
    <section class="container">
        <div class="row">
            <div class="col-12">
                <h1>BoolFlixxx</h1>
                <div class="input-group mb-3">

                    <input type="text" class="form-control" placeholder="Cerca" aria-label="Recipient's username"
                        aria-describedby="button-search" v-model="store.searchText"
                        @keyup.enter="getApi(store.searchText)">
                    <button class="btn btn-outline-secondary" type="button" id="button-search"
                        @click="getApi(store.searchText)">Search</button>


                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.box {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.my_form {
    width: 50%;
    border: 1px solid black
}

h1 {
    margin-right: 50%;
    padding-top: 1rem;
    font-weight: 600;
}
</style>