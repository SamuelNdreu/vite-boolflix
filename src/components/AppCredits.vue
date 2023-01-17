<script>
export default {
    name: 'AppCredits',
    data() {
        return {
            apiKey: "56fe84a4653ee995f78bcfae8038ddd7",
            apiUri: "https://api.themoviedb.org/3/search/person"
        }
    },
    methods: {
        findActors(movieID) {
            axios.get(this.apiUri + 'movie', {
                params: {
                    api_key: this.apiKey,
                    movie_id: movieID,
                }
            })
                .then((response) => {
                    console.log(response.data.results);
                    store.searchedMovie = response.data.results
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
}
</script>

<template>
    <div>

    </div>
</template>

<style lang="scss" scoped>

</style>