<template>
    <div class="">
        <!-- banner -->
        <div v-if="banner.IsBannerExist">
            <img :src="banner.bannerSrc" class="banner" :alt="banner.bannerAlt">
        </div>
        <!-- header -->
        <div class="cneter col-12 row">
            <div class="header-menue center md-layout" >
            <div class="md-layout-item logo">
                <img src="/logo.png" alt="logo">
            </div>
            <div class="md-layout-item menu-item">
                <ul>
                    <li><NuxtLink class="nuxt-link" to="">دوره‌ها</NuxtLink> </li>
                    <li><NuxtLink class="nuxt-link" to="">مقالات</NuxtLink> </li>
                    <li><NuxtLink class="nuxt-link" to="">درباره ما</NuxtLink> </li>
                    <li><NuxtLink class="nuxt-link" to="">ارتباط با ما</NuxtLink> </li>
                </ul>
            </div>
            <div class="md-layout-item login-parent md-layout md-gutter md-alignment-center-right">
                <div class="md-layout-item  center md-size-25">
                    <md-button class="login md-dense md-default">ورود / ثبت‌نام</md-button>
                </div>
                    <Cart class="cart center" />
            </div>
            </div>
        </div>

    </div>
</template>
<script>
import Cart from '../cart'
export default {
    components:{
        Cart
    },
    data(){
        
        return{
            banner:{
                IsBannerExist:true,
                bannerSrc:'/banner.png',
                bannerAlt:'banner'
            },
        }
    }
}
</script>
<style lang="scss" scoped>
.banner{
    max-height: 70px;
    width: 100%;
    z-index: 1;
}
.header-menue{
    z-index: 1;
    position: relative;
    max-height: 67px;
    width: 100%;
    display: flex;
    max-width: 1600px;
    left:0;
    right:0;
    margin:auto;
    .logo{
        margin-right: 20px;
        padding: 5px;
        max-height: 70px;
        max-width: 70px;
        img{
            width: 100%;
        }
    }
    ul{
        text-decoration: none;
        list-style:none;
        display: flex;
        li{
            padding-top:15px;
            padding-right:10px;
            .nuxt-link{
                color:rgb(251, 249, 249);
                // color: $links !important;
                font-family: vazir_light;
                font-size: 20px;
            }
        }
    }
    .login-parent{
        margin-left: 20px;
        .login{
            color:rgb(251, 249, 249);
            font-family: vazir_light;
            position:relative; 
            text-align: left;
            margin-left: 10px;
            font-size: 20px;
        }
        .cart{
            width: 35px;
        }
    }
}
router-link{
    text-decoration: none;
}
</style>