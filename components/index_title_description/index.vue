<template>
    <div class="center row col-12">
        <div class="row-with-title center row col-12">
            <div class="picture-and-info-box">
                <!-- TODO picture for width > 2000 is not responsive -->
                <img src="/fold1-img3.jpg" alt="">
                <!-- <picture class="display:block">
                    <source media="min-width:760px" srcset="https://images.alphacoders.com/102/thumb-1920-1026345.jpg">
                    <source media="max-width:760px" srcset="https://images.alphacoders.com/102/thumb-1920-1026345.jpg">
                    <source media="max-width:480px" srcset="https://images.alphacoders.com/102/thumb-1920-1026345.jpg">
                    <source media="max-width:360px" srcset="https://images.alphacoders.com/102/thumb-1920-1026345.jpg">
                </picture> -->
            </div>
            <div class="main-title">
                <h1 class="title-text vazir-medium">این یک متن هشت کلمه ای می باشد این یک متن هشت کلمه ای می باشد ;&nbsp;<span class="pointer blink">&nbsp;&nbsp;</span></h1>
            </div>
            <div class="info-box center">
                <div class="card ">
                    <h1 >کدستون</h1>
                    <p >این یک متن ساختگی برای توضیحات این سایت می‌باشد</p>
                    <md-field class="search center">
                      <md-input color="primary" class="search-input" placeholder="جستجو ..." v-model="search"></md-input>
                    </md-field>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            search:'',
        }
    }
}
</script>
<style lang="scss" scoped>
.row-with-title{
    width: 100%;
    overflow: hidden;
    position: relative;
    max-width: 1600px;
    .pictire-and-info-box{
        display: flex;
        picture{
            source{
                position: absolute;
                max-width: 100%;
                object-fit: cover;
            }
        }
    }
    .main-title{
        position: absolute;
        right: 10%;
        max-width: 60%;
        line-height: 1.4;
        .title-text{
            font-weight: 900 !important;
            font-size: 2.5rem;
            color:#ffff;
            .pointer{
                background-color:#ffff;   
                font-size: 22px;
            }
            .blink {
              animation: blink-animation 1s steps(5, start) infinite;
              -webkit-animation: blink-animation 1s steps(5, start) infinite;
            }
            @keyframes blink-animation {
              to {
                visibility: hidden;
              }
            }
            @-webkit-keyframes blink-animation {
              to {
                visibility: hidden;
              }
            }
        }
    }
    .info-box{
        position: absolute;
        width: 400px;
        height: 100%;
        left: 0;
        top:0;
        background-color: rgba($color: #000000, $alpha: 0.3);
        display: flex;
        justify-content: center;
        .card{
            position: relative;
            text-align:center;
            color: #ffff;
            opacity: 1;
            line-height: normal;
            h1{
                font-family: vazir_bold;
            }
            p{
                font-family: vazir_medium;
            }
            .search{
                background-color: rgb(251, 249, 249);
                border-radius: 5px;
                direction: rtl;
                padding-right: 20px;
                max-height: 10px;
                padding-top: 0px;
                .search-input{
                    // background-color:white;
                    border-radius: 2px;
                    padding-right: 5px;
                }
                .search-input::placeholder {
                    padding-right: 5px;
                    color:$gray;
                }
            }
        }

    }

}
@media (min-width: 768px) and (max-width:960px){
    .info-box{
        width: 300px !important;
        height: 100%;
        .card{
            margin-top: -50px;
            h1{
                font-size: 24px;
            }
            p{
                font-size: 16px;
                font-family: vazir_thin !important;
            }
            .search{
                .search-input{
                    max-width: 150px;
                }
            }
        }
    }
}
@media  (max-width:768px){
    .info-box{
        width: 100% !important;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.4);
        .card{
            position: relative;
            top: 2% !important;
            h1{
                font-size: 24px;
            }
            p{
                font-size: 16px;
                font-family: vazir_thin !important;
            }
            .search{
                .search-input{
                    max-width: 90%;
                }
            }
        }
    }
}
</style>