<template>
    <div class="container">
        <div class="row ">
                <div class="col-md-12">
                    <div v-if="! loading">
                        <!-- Featured post-->
                        <!-- Nested row for non-featured posts-->
                        <div class="row mb-5">
                            <div class="col-md-3" v-for="(postGroup , index) in posts.slice(2)" :key="index">
                                <!--  post-->
                                <post-item v-for="post in postGroup" :key="post.id" :post="post"></post-item>
                            </div>
                        </div>
                    </div>
                    <div v-else>loading</div>
                    <pagination :currentPage="page.current" :totalPage="page.totalPage" @pagechanged="changePage"></pagination>
                </div>
        </div>
    </div>
</template>

<script>
    import { ref , reactive } from 'vue';
    import PostItem from '../components/PostItem.vue'
    import axios from 'axios';
    import _ from 'underscore';
    import Pagination from '../components/Pagination.vue';

export default {
    components : {
        PostItem,
        Pagination,
    },
    setup() {
                                    
        const posts = ref([]);

        const loading = ref(false);
        const page = reactive({
                current : 1,
                totalPage : 0
        })

        function getPostData(pageNumber = 1) {
            loading.value = true;
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`)
                .then(res => {
                    loading.value = false;
                    posts.value = res.data.results;
                             

                    posts.value = [posts.value , ..._.chunk(posts.value,  4)]
                  

                    page.current = pageNumber;
                    page.totalPage = parseInt(res.data.total_pages / 9)      
                    
                })
                .catch(err => console.log(err))
        }

        function changePage(page) {
            getPostData(page);
        }

        getPostData(1);

        return {
            posts,
            loading,
            changePage,
            page
        }
        
    }
}
</script>