<template>
    <div class="row-with-title">
        <div class="picture-and-info-box">
            <img src="/fold1-img.jpg" alt="">
        </div>
        <div class="info-box">
            <div class="card center">
                <h1>کدستون</h1>
                <p>این یک متن ساختگی برای توضیحات این سایت می‌باشد</p>
                <md-field class="search">
                  <md-input color="primary" class="search-input" placeholder="جستجو ..." v-model="search"></md-input>
                </md-field>
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
    .pictire-and-info-box{
        display: flex;
        img{
            position: absolute;
            max-width: 100%;
            object-fit: cover;
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
            top: 30%;
            max-width: 50%;
            text-align:center;
            display: block;
            color: #ffff;
            opacity: 1;
            h1{
                font-family: vazir_bold;
            }
            p{
                font-family: vazir_medium;
            }
            .search{
                .search-input{
                    background-color:white;
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
</style>