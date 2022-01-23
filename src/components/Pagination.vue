<template>
     <!-- Pagination-->
    <nav aria-label="Pagination">
        <hr class="my-0" />
        <ul class="pagination justify-content-center my-4">
            <li class="page-item" :class="{ 'disabled' : isInFirstPage }">
                <button type="button" class="page-link" :disabled="isInFirstPage" @click="onClickPage(1)">&lsaquo;</button>
            </li>
           
            <li class="page-item" v-for="page in pages" :key="page.name" :class="{ 'active' : page.isActive }">
                <button type="button" @click="onClickPage(page.name)" class="page-link" :disabled="page.isActive">{{ page.name }}</button>
            </li>
      
           
           
            <li class="page-item" :class="{ 'disabled' : isInLastPage }">
                <button type="button" class="page-link" :disabled="isInLastPage" @click="onClickPage(totalPage)">&raquo;</button>
            </li>
        </ul>
    </nav>
</template>

<script>
import { toRefs , computed } from 'vue';

    export default {
        props : {
            totalPage : {
                type : Number,
                required : true
            },
            currentPage : {
                type:  Number,
                required : true
            },
            maxVisibleButtos : {
                type : Number,
                required : false,
                default : 4
            }
        },
        setup(props , context) {
            const {currentPage , totalPage , maxVisibleButtos} = toRefs(props);


            const startPage = computed(() => {
                if(currentPage.value === 1) return 1;


                if(currentPage.value === totalPage.value) return totalPage.value - 4;
                    console.log(totalPage.value)

                return currentPage.value - 1;
            })
            const endPage = computed(() => Math.min(startPage.value + maxVisibleButtos.value - 1, totalPage.value))
            const pages = computed(() => {
                let range = [];

                for (let i = startPage.value ; i <= endPage.value ; i++) {
                    range.push({
                        name : i,
                        isActive : i === currentPage.value
                    })
                }

                return range;
            })
            const isInFirstPage = computed(() => currentPage.value === 1)
            const isInLastPage = computed(() => currentPage.value === totalPage.value)
       

            function onClickPage(page) {
                context.emit('pagechanged' , page)
            }

            return {
                pages,
                onClickPage,
                isInFirstPage,
                isInLastPage
            }
       }
    }
</script>

<style scoped>
.page-link{
    color: #4e6184;
}
.page-item.active .page-link{
      background: #4e6184;
      border: none;
      
}
</style>