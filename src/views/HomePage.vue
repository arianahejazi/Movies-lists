
<template>
    <div>
        <!-- Search By Release Date -->
        <SearchDate></SearchDate>
        <PostList></PostList>

    </div>
</template>

<script>
    import SearchDate from '../components/SearchDate.vue'
    import PostList from '../components/PostList.vue'
    export default {
        components : {
            SearchDate,
            PostList,
        },
        setup() {
        }

    }
</script>





