<script>
import { store } from '../store.js'
export default {
    name: 'AppHeader',
    data () {
        return {
            store,
        }
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
                        aria-describedby="button-search" v-model="store.searchText" @keyup.enter="$emit('searchMovie')">
                    <button class="btn btn-outline-secondary" type="button" id="button-search"
                        @click="$emit('searchMovie')">Cerca</button>
    
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
</style>