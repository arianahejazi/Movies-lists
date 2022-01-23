<template>
    <div class="card mb-4 p-2 m-4">
       <img class="card-img-top" v-bind:src="`https://image.tmdb.org/t/p/w500/${post.poster_path}`" alt="..." />
        <div class="card-body">
            <h2 class="card-title h4">
                <router-link :to="`/posts/${post.id}`">{{ post.original_title }}</router-link>
            </h2>
            <div class="small text-muted">{{post.release_date}}</div>

            <!-- <p class="card-text">{{ post.genre_ids }} </p> -->
        </div>
    </div>
</template>


<script>
export default {
    props : ['post'],
}
</script>