<template>
    <div>
        <md-field class="subscribe">
            <md-input color="primary" class="subscribe-input vazir-light" placeholder="ایمیل خود را وارد کنید" ></md-input>
            <!-- <md-button class="md-raised btn">ارسال</md-button> -->
        </md-field>
    </div>
</template>
<style lang="scss" scoped>
md-input{
    border: none !important;
}
.subscribe{
    background-color: rgb(251, 249, 249);
    border-radius: 5px;
    direction: rtl;
    padding-right: 20px;
    max-height: 10px;
    // padding-bottom: 5px;
    padding-top: 5px;
    .subscribe-input{
        border: none;
    }
    .btn{
        min-width: 130px;
        font-family: vazir_light;
        // background-color: rgba(94, 219, 21, 0.698));
    }
}
</style>