<template>
    <div class="width-100 center vazir-light">
        <router-link :to="routeName">
            <md-button style="" @click="ShowMore()" class="md-primary md-button md-dense md-raised">نمایش بیشتر</md-button>
        </router-link>
    </div>
</template>
<script>
export default {
    props:['routeName'],
}
</script>
<style lang="scss" scoped>
.md-button{
    width:150px ;
    animation-name: width;
    animation-duration: 4s;
    }
.md-button:hover{
    width:500px !important;
}
</style>