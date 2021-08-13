<template>
    <div>
        <!-- banner -->
        <div v-if="banner.IsBannerExist">
            <img :src="banner.bannerSrc" class="banner" :alt="banner.bannerAlt">
        </div>
        <!-- header -->
        <div class="header-menue md-layout">
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
                <div class="md-layout-item md-size-25">
                    <md-button class="login md-dense md-default">ورود / ثبت‌نام</md-button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            banner:{
                IsBannerExist:true,
                bannerSrc:'/banner.jpg',
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
    overflow: hidden;
    .logo{
        margin-right: 20px;
        padding: 5px;
        max-height: 50px;
        max-width: 50px;
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

        }
    }

    
}
router-link{
    text-decoration: none;
}
</style>