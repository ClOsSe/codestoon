<template>
    <div class="row col-12  title">
        <h2>{{Title}}</h2>
    </div>
</template>
<script>
export default {
    props:['Title'],
    mounted(){
        console.log(this.Title);
    }
}
</script>
<style lang="scss" scoped>
.title{
    padding: 20px;
    margin: 25px;
    margin-top: 35px;
    font-size: 24px;
    font-family: vazir_bold;
}
</style>