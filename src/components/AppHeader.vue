<script>
import axios from 'axios';
import { store } from '../store.js'
export default {
    name: 'AppHeader',
    data () {
        return {
            store,
            apiKey:'56fe84a4653ee995f78bcfae8038ddd7',
            apiUri:'https://api.themoviedb.org/3/search/movie',
            apiUriTvShows:'https://api.themoviedb.org/3/search/tv',
        }
    },
    methods: {
        getMovies(searchedQuery){
            //chiamata API
            axios.get(this.apiUri,{ 
                params:{
                    api_key:this.apiKey,
                    query: searchedQuery
                }
                
            })
            .then( (response) => {
                console.log(response.data.results);
                this.store.moviesList = response.data.results;
            })
            .catch( function (error) {
                console.warn (error)
            });

        },
        getTvShows(searchedQuery){
            //chiamata API
            axios.get(this.apiUriTvShows,{ 
                params:{
                    api_key:this.apiKey,
                    query: searchedQuery
                }
                
            })
            .then( (response) => {
                console.log(response.data.results);
                this.store.searchedTvshow = response.data.results;
            })
            .catch( function (error) {
                console.warn (error)
            });

        },
        
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
                    <input type="text" class="form-controll" placeholder="Cerca Aqui" aria-label="Recipent's Username"
                        aria-describedby="button-search" v-model="store.searchText" @keyup.enter="getMovies(store.searchText)">
                    <button class="btn btn-outline-secondary" type="button" id="button-search"
                        @click="getMovies(store.searchText)">Search</button>
    
    
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    button{
        margin-left: 1rem;
    }
</style>