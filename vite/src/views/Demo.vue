<template>
    <div>
        <h1>demo</h1>    <DemoTest />
    </div>
    
</template>
<script setup>
    import request from '../utils/request.js'
    import DemoTest from '../components/Reactive&Ref.vue'
    request({
        url:'/api/V1/Bookuu/GetHomePageBanner?bannerType=5&cardNo=933000000000024936&channel_id=100001'
    }).then(res=>{})
</script>
