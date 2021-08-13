<template>
    <div class="footer-body">
        <div class="center first-row row col-12">
            <div class="center row col-12">
                <div class="col-12 row center">
                <h3 class="title text-center vazir-bold text-h12 col-6">برای دریافت آخرین اخبار و اطلاع از کدهای تخفیف در خبرنامه ما عضو شوید</h3>
                </div>
                <div class="center">
                    <!-- FIXME:input tags is not working -->
                    <Subscribe />
                </div>
            </div>
        </div>
        <div class="row sec-row col-12">
            <div class="row column-1 col-8">
                <div dir="rtl" class="col-6">
                    <h4 class="center vazir-bold">آدرس‌ها</h4>
                    <h4 class="center vazir-bold">ایمیل: {{email}}</h4>
                    <h4 class="center vazir-bold">تلفن: {{cel}}</h4>
                    <h4 class="center vazir-bold">آدرس: {{address}}</h4>
                </div>
                <div class="col-6">
                    <h4 class="center vazir-bold">قوانین و مقررات</h4>
                    <h4 class="center vazir-bold">سوالات متداول</h4>
                    <h4 class="center vazir-bold">ارتباط با ما</h4>
                    <h4 class="center vazir-bold">درباره ما</h4>
                </div>
            </div>
            <div dir="rtl" class="column-2 col-4">
                <div class="row">
                    <h2 class="vazir-bold text-h12">کدستون</h2>
                    <p class="vazir-light">
                        اگر شما سعی دارید به صورت فردی برای بالا بردن مهارت های خود در جهت کسب و کار قصد دارید از آموزش آنلاین استفاده کنید : کدستون یکی از بهترین گزینه های شما خواهد بود . کافیست با مشاهده بیش از 10 ها ساعت ویدئویی که در سایت به صورت رایگان می باشد مهارت های خود را افزایش دهید.
                    </p>
                    <ul class="d-flex center row col-12">
                    <li>whatsapp</li>
                    <li>telegram</li>
                    <li>instagram</li>
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
            email:'email@gmail.com',
            cel:'09121234567',
            address:'ادرس',
            rights:'تمامی حقوق مادی و معنوی این سایت متعلق به کدستون می باشد و هرگونه کپی برداری غیرقانونی محسوب خواهد شد'
        }
    } 
}
</script>
<style lang="scss" scoped>
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
            }
            
        }
    }
    .rights{
        padding: 20px;
        color:rgb(251, 249, 249);
    }
   
}
</style>