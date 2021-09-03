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
@media only screen  and (min-width: 1601px) {
    
    
    .subscribe{
            background-color: rgb(251, 249, 249);
            border-radius: 5px 5px 0px 0px;
            direction: rtl;
            padding-right: 20px;
            // max-height: 10px;
            // padding-bottom: 5px;
            padding-top: 5px;
            height: 50px;
        .subscribe-input{
            border: none;
        }
        .subscribe-input::placeholder{
            font-size: 21px !important;
        }
    
    }
    .btn{
        width: 100%;
        height: 50px;
        border-radius: 0px 0px 5px 5px;
        padding: 0 !important;
        margin:0 !important ;
        margin-top: -25px !important;
        font-family: vazir_light;
        font-size: 24px;
        // background-color: rgba(21, 219, 209, 0.698) !important;
        background-color: rgb(45 128 231) !important;
        color:white !important;
    }
}
@media only screen  and (max-width: 1600px) {

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
        // background-color: rgba(21, 219, 209, 0.698) !important;
        background-color: rgb(45 128 231) !important;
        color:white;
        font-family:vazir_light;
    }
}
@media (min-width: 768px) and (max-width:960px){

    .subscribe{
            background-color: rgb(251, 249, 249);
            border-radius: 5px 5px 0px 0px;
            direction: rtl;
            padding-right: 20px;
            // max-height: 10px;
            // padding-bottom: 5px;
            padding-top: 5px;
            height: 50px;
        .subscribe-input{
            border: none;
        }
        .subscribe-input::placeholder{
            font-size: 14px !important;
        }
    
    }
    .btn{
        width: 100%;
        height: 30px;
        border-radius: 0px 0px 5px 5px;
        padding: 0 !important;
        margin:0 !important ;
        margin-top: -25px !important;
        font-family: vazir_light;
        font-size: 14px;
        // background-color: rgba(21, 219, 209, 0.698) !important;
        background-color: rgb(45 128 231) !important;
        color:white !important;
    }
}
</style>