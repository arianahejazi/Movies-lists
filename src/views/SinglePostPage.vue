<template>
    <div class="container my-5 p-3">
        <div class="row">
            <div class="col-md-6">
                <router-link to="/" class="btn"> back </router-link>
            </div>
            <div class="col-md-6">
                <p class=" pt-2 pr-4">
                    Title : {{post.title}}
                </p>
            </div>
        </div>
    </div>

    <div class="container my-4">
        <div v-if="loading">loading ...</div>
        <div v-else>
            <div class="row m-4 ">
                <div class="col-md-4">
                    <img class="card-img-top p-5" v-bind:src="`https://image.tmdb.org/t/p/w500/${post.poster_path}`" alt="..." />            
                </div>
                <div class="col-md-8">
                    <table class="table table-striped mt-5">
                        <tbody>
                            <tr>
                                <th scope="row">Budget</th>
                                <td>{{post.budget}}</td>
                            </tr>
                            <tr>
                                <th scope="row">Revenue</th>
                                <td>{{post.revenue}}</td>
                            </tr>
                            <tr>
                                <th scope="row">RelaseDate</th>
                                <td>{{post.release_date}}</td>
                            </tr>
                            <tr>
                                <th scope="row">Run time</th>
                                <td>{{post.runtime}}</td>
                            </tr>
                            <tr>
                                <th scope="row">Score</th>
                                <td>{{post.vote_average}}</td>
                            </tr>

                            <tr>
                            <th scope="row">Homepage Link</th>
                                <td>
                                    <a v-bind:href="post.homepage">
                                    {{post.homepage}}
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>                
        </div>
    </div>
    <div class="container mb-5">
        <div class="row">
            <div class="row mx-2 my-2 p-4" >
                {{post.overview}}
            </div>

            <div class="row"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { reactive , isRef, ref, toRefs } from 'vue';
import { useRoute } from 'vue-router';

export default {
    setup() {

        const state = reactive({
            post : {}
        });
        const loading = ref(false);
        const route = useRoute();

        axios.get(`https://api.themoviedb.org/3/movie/${route.params.post}?api_key=f62f750b70a8ef11dad44670cfb6aa57&language=en-US`)
            .then(res => {
                console.log( res.data)
                loading.value = false;
                state.post = res.data
            })
            .catch(err => console.log(err))

        return {
            ...toRefs(state),
            loading
        }
    }
}
</script>


<style scoped>
  .container{
    background: #f4f4f4 !important;
    box-shadow: 1px 1px 3px #9c9c9cdd !important;;
  }
  .btn{
    border: 3px solid #2a406a !important;
    border-radius: 10px;
    width: 30%;
    height: 38px;
    background: #4e6184;
    color: #ffff;
  }
  p{
    text-align: right;
    font-weight: bold;
  }
</style>