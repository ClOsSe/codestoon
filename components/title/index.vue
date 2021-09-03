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
@media only screen  and (min-width: 1601px) {
    .title{
        max-width: 2000px !important;
    }
}
@media only screen  and (max-width: 1601px) {
    .title{
        max-width: 1600px !important;
    }
}
.title{
    padding: 20px;
    margin: 25px;
    margin-top: 35px;
    font-size: 20px;
    font-family: vazir_bold;

}
</style>