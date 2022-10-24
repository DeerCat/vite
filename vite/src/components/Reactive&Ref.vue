<script>
import {onMounted,ref} from 'vue'
export default {
    setup(){
        const book2 = {
            id:123
        }
        const msg = ref('123')
        function showBook2Id (){
            console.log(book2.id)
        }
        onMounted(()=>{
            console.log(book2.id)
        })
        return{
            book:{
                id:11234,
            },
            book2,
            showBook2Id,
            msg
        }
    },
    data(){
        return {
            book3:{
                id:1245
            }
        }
    },
    methods:{
        showBookId:function(){
            console.log(this.book.id)
        },
        showBook3Id(book){
            console.log(book.id)
        }
    },
    mounted(){
        console.log(this.book.id)
    }
}
</script>
<template>
    <h2 @click='showBookId'>bookId:{{book.id}}</h2>
    <h2 @click='showBook2Id'>book2Id:{{book2.id}}</h2>
    <h2 @click='showBook3Id(book3)'>book3Id:{{book3.id}}</h2>
    <input type="text" v-model='msg'>
    <div>{{msg}}</div>
</template>