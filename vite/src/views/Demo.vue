<template>
    <div>
        <h1>demo</h1>       
        <DemoTest />
    </div>
</template>
<script>
    import {onMounted} from 'vue'
    import DemoTest from '../components/Reactive&Ref.vue'

    onMounted(()=>{
        console.log(this)
        // $http({
        //     url:'/api/V1/Bookuu/GetHomePageBanner?bannerType=5&cardNo=933000000000024936&channel_id=100001'
        // }).then(res=>{})
    })
    export default{
        setup(props,ctx){
            console.log(props,ctx)
        },
        components:{
            DemoTest
        },
        mounted(){
            console.log(this)
             this.$http({
                    url:'/api/V1/Bookuu/GetHomePageBanner?bannerType=5&cardNo=933000000000024936&channel_id=100001'
                }).then(res=>{})
        },
    }
   
</script>
