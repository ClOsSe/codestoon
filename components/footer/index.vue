<template>
    <div class="footer-body">
        <div class="center first-row row col-12">
            <div class="center row col-12">
                <div class="col-12 row center">
                <h3 class="title text-center vazir-bold text-h12 col-6">برای دریافت آخرین اخبار و اطلاع از کدهای تخفیف در خبرنامه ما عضو شوید</h3>
                </div>
                <div class="center row col-12">
                    <Subscribe class="col-4"></Subscribe>
                </div>
            </div>
        </div>
        <div class="row sec-row col-12">
            <div class="row column-1 col-8">
                <div dir="rtl" class="col-6">
                    <h4 class="center vazir-bold">آدرس‌ها</h4>
                    <a :href="`mailto:${email}`" target="_blank">
                        <h4 class="center vazir-bold">ایمیل: {{email}}</h4>
                    </a>
                    <a :href="`tel:${cel}`" target="_blank">
                        <h4 class="center vazir-bold">تلفن: {{cel}}</h4>
                    </a>
                    <h4 class="center vazir-bold">آدرس: {{address}}</h4>
                </div>
                <div class="col-6">
                    <router-link to="ruls">
                    <h4 class="center vazir-bold">قوانین و مقررات</h4>
                    </router-link>
                    <router-link to="faq">
                    <h4 class="center vazir-bold">سوالات متداول</h4>
                    </router-link>
                    <router-link to="contact_us">
                    <h4 class="center vazir-bold">ارتباط با ما</h4>
                    </router-link>
                    <router-link to="about_us">
                    <h4 class="center vazir-bold">درباره ما</h4>
                    </router-link>
                </div>
            </div>
            <div dir="rtl" class="column-2 col-4">
                <div class="row">
                    <h2 class="vazir-bold text-h12">کدستون</h2>
                    <p class="vazir-light">
                        اگر شما سعی دارید به صورت فردی برای بالا بردن مهارت های خود در جهت کسب و کار قصد دارید از آموزش آنلاین استفاده کنید : کدستون یکی از بهترین گزینه های شما خواهد بود . کافیست با مشاهده بیش از 10 ها ساعت ویدئویی که در سایت به صورت رایگان می باشد مهارت های خود را افزایش دهید.
                    </p>
                    <ul class="d-flex center row col-12">
                        <li>
                            <a href="" target="_blank">
                                <whatsapp :size="innerWidth > 1600 ? 40 : 30" />
                            </a>
                        </li>
                        <li class="telegram">
                            <a href="" target="_blank">
                                <telegram :size="innerWidth > 1600 ? 40 : 30" />
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <instagram :size="innerWidth > 1600 ? 40 : 30" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="rights text-h5 center col-12 row">
            <p class="vazir-light">{{rights}}</p>
        </div>
    </div>
</template>
<script>
import Subscribe from "../subscribe";
export default {
    components:{
        Subscribe
    },
    data(){
        return{
            innerWidth: 0,
            email:'email@gmail.com',
            cel:'09121234567',
            address:'ادرس',
            rights:'تمامی حقوق مادی و معنوی این سایت متعلق به کدستون می باشد و هرگونه کپی برداری غیرقانونی محسوب خواهد شد'
        }
    },
    mounted(){
        this.innerWidth =  window.innerWidth
    }
}
</script>
<style lang="scss" scoped>
@media only screen  and (min-width: 1601px) {
       .footer-body{
        background-image: radial-gradient(circle at 1% 1%,#328bf2,#1644ad);
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: auto;
        overflow: hidden;
        position: relative;
        .first-row{
            min-height: 300px;
            .title{
                color:rgb(251, 249, 249);
                line-height: normal;
            }
        }
        .sec-row{
            min-height: 346px;
            padding: 50px;
            .column-1{
                padding: 20px;
                h4{
                    padding: 5px;
                    text-align: right;
                    color:rgb(251, 249, 249);
                    font-size: 22px;
                    line-height: 1.5;
                }
            }
            .column-2{
                h2,p,ul{
                    line-height: 1.5;
                    font-size: 20px;
                    padding: 10px;
                    color:rgb(251, 249, 249);
                }
                ul>li{
                    padding: 25px;
                    margin-right: 15px;
                }
                ul{
                    a{
                        color: white;
                    }
                    .telegram{
                        transform: rotate(-40deg);
                    }
                }
                
            }
        }
        .rights{
            padding: 10px;
            color:rgb(251, 249, 249);
            p{
                font-size: 20px;
            }

        }
    
    }
}
@media only screen  and (max-width: 1600px) {
    .footer-body{
        background-image: radial-gradient(circle at 1% 1%,#328bf2,#1644ad);
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: auto;
        overflow: hidden;
        position: relative;
        .first-row{
            min-height: 280px;
            .title{
                color:rgb(251, 249, 249);
                line-height: normal;
            }
        }
        .sec-row{
            min-height: 326px;
            padding: 50px;
            .column-1{
                padding: 20px;
                h4{
                    padding: 5px;
                    text-align: right;
                    color:rgb(251, 249, 249);
                }
            }
            .column-2{
                h2,p,ul{
                    padding: 10px;
                    color:rgb(251, 249, 249);
                }
                ul>li{
                    padding: 5px;
                    margin-right: 15px;
                }
                ul{
                    a{
                        color: white;
                    }
                    .telegram{
                        transform: rotate(-40deg);
                    }
                }
                
            }
        }
        .rights{
            padding: 20px;
            color:rgb(251, 249, 249);
        }
    }
}
@media (min-width: 768px) and (max-width:960px){

    .footer-body{
        background-image: radial-gradient(circle at 1% 1%,#328bf2,#1644ad);
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: auto;
        overflow: hidden;
        position: relative;
        .first-row{
            min-height: 230px;
            .title{
                color:rgb(251, 249, 249);
                line-height: normal;
                font-size: 15px !important;
            }
        }
        .sec-row{
            min-height: 276px;
            padding: 50px;
            .column-1{
                padding: 10px;
                h4{
                    font-size: 14px;
                    padding: 5px;
                    text-align: right;
                    color:rgb(251, 249, 249);
                }
            }
            .column-2{
                h2,p,ul{
                    padding: 10px;
                    color:rgb(251, 249, 249);
                    font-size: 12px;
                }
                ul>li{
                    padding: 0px;
                    margin-right: 15px;
                }
                ul{
                    a{
                        color: white;
                    }
                    .telegram{
                        transform: rotate(-40deg);
                    }
                }
                
            }
        }
        .rights{
            padding: 20px;
            color:rgb(251, 249, 249);
            font-size: 10px;
        }
    }
}
</style>