<template>
    <div>
        <md-field class="subscribe">
            <md-input color="primary" class="subscribe-input vazir-light" placeholder="ایمیل خود را وارد کنید" ></md-input>
        </md-field>
            <md-button class="md-raised btn ">عضویت</md-button>
    </div>
</template>
<style lang="scss" scoped>
md-input{
    border: none !important;
}
.subscribe{
    background-color: rgb(251, 249, 249);
    border-radius: 5px 5px 0px 0px;
    direction: rtl;
    padding-right: 20px;
    max-height: 10px;
    // padding-bottom: 5px;
    padding-top: 5px;
    .subscribe-input{
        border: none;
    }
    
}
.btn{
        width: 100%;
        border-radius: 0px 0px 5px 5px;
        padding: 0 !important;
        margin:0 !important ;
        margin-top: -25px !important;
        font-family: vazir_light;
        font-size: 17px;
        background-color: rgba(21, 219, 209, 0.698) !important;
    }
</style>