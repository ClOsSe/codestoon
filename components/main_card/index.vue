<template>
    <div dir="rtl" class="card row">
        <md-card md-with-hover >
            <div v-if="cardInfo.imageUrl" class="category-picture">
                <div class="box-cover">
                <img :src="cardInfo.imageUrl" :alt="cardInfo.title">
                </div>
            </div>

            <div class="first-box">
                <md-ripple>
              <md-card-content class="card-content">

              <!-- <md-card-header > -->
                <div class="md-title title">
                    <h2 v-if="cardInfo.title">
                        <a href="">
                            {{ cardInfo.title }}
                        </a>
                    </h2>
                </div>
                <div v-if="cardInfo.lenght || cardInfo.topics " class="md-subhead md-layout md-gutter sub-title">
                    <p v-if="cardInfo.isCategory == true" style="margin:5px;margin-right:10px;margin-top:10px" align="right" class="icon  md-alignment-center-right" >تعداد ویدیو‌ها</p>
                    <p v-if="cardInfo.isCourse == true" style="margin:5px;margin-right:10px;margin-top:10px" align="right" class="icon  md-alignment-center-right" >تعداد ساعت دوره</p>
                    <p v-if="cardInfo.lenght" style="margin:5px;margin-left:10px;margin-top:10px"  class="course-lenght md-alignment-center-right" >{{ cardInfo.lenght }}</p>
                    <div class="" style="margin:auto"></div>
                    <p v-if="cardInfo.isCategory == true" style="margin:5px;margin-right:10px;margin-top:10px" align="right" class="icon  md-alignment-center-right" >تعداد دوره‌ها</p>
                    <p v-if="cardInfo.isCourse == true" style="margin:5px;margin-right:10px;margin-top:10px" align="right" class="icon  md-alignment-center-right" >تعداد ویدیو‌های دوره</p>
                    <p style="margin:5px;margin-left:10px;margin-top:10px"  class="course-lenght md-alignment-center-right" v-if="cardInfo.topics">{{ cardInfo.topics }}</p>
                </div>
              <!-- </md-card-header> -->
                <!-- description -->
                <p class="short-description" v-if="cardInfo.shortDescription">{{cardInfo.shortDescription}}</p>
              </md-card-content>
              <!-- tags if its article this row will display -->
              <md-card-content v-if="cardInfo.tags">
                  <div class="row flex col-12 tags">
                      <div class="cneter tag-box" v-for="(item,index) in cardInfo.tags" :key="index">
                          <p class="tag-item vazir-light"  ># {{item}}</p>
                      </div>
                  </div>
              </md-card-content>
                <!-- action -->
              <md-card-actions v-if="cardInfo.isCourse" class="card-action">
                <md-button class="md-primary md-dense md-raised col-11">خرید</md-button>
              </md-card-actions>
              <!-- action for article -->
              <md-card-actions v-if="cardInfo.isArticle" class="card-action">
                <div class=" md-layout md-gutter article-info">
                    <md-icon class="md-layout-item">textsms</md-icon>
                    <p class="article-infoCounts">{{cardInfo.countOfCumments}}</p>
                    <md-icon class="md-layout-item">visibility</md-icon>
                    <p class="article-infoCounts">{{cardInfo.coutOfViews}}</p>
                </div>
              </md-card-actions>
            </md-ripple>
            </div>
        </md-card>
    </div>
</template>
<script>
export default {
    props:['cardInfo'],
    mounted(){
    }
}
</script>
<style lang="scss" scoped>
.card{
    cursor:auto;
    width: 100% !important;
    border-radius: 20px;
    box-shadow: 0px 0px 10px gray;
    overflow: hidden;
    max-width: 320px;
    .category-picture{
        cursor:auto;
        padding: 0;
        width: 100%;
        .box-cover{
            width: 100%;
            max-height: 300px;
            min-height: 225px;
            img{
                margin-right: 0px;
                width: 100%;
                height: 225px;
                border :none;
                border-radius: 0px;
                object-fit: contain;
            }
        }
    }
    .title{
        direction: rtl;
        text-align: right;
        font-family: vazir_medium;
        font-size: 12px;
       a{
           color: rgb(53, 69, 156);
       } 
    }
    
    .sub-title{
        div{
            direction: rtl;
            display: flex;
        }
    }
    .first-box{
        cursor:auto;
        background-color: #ffffff;
        border-radius: 15px;
        margin-top: -25px;
        position: relative;
        .card-content{
            padding:20px;
            max-height: 247px;
            font-family: vazir_light;
            text-align: justify;
            p{
                max-height: 85px;
                overflow: hidden;
            }
            // .short-description{
            //     display: inline-block;
            //     width: 380px;
            //     white-space: nowrap;
            //     overflow: hidden !important;
            //     text-overflow: ellipsis;
            // }
        }
    }
    
    .card-action{
            font-family: vazir_light;
            justify-content: center !important;
    }
    .tags{
        padding: 5px;
        .tag-item{
            background-color: rgb(218, 218, 218);
            margin:2px;
            padding: 2px;
        }
    }
    .article-info{
        .article-infoCounts{
            font-family: vazir-light;
            padding-top: 2px;
            margin-left: 15px;
        }
    }
}
.card:hover{
    .box-cover{
        width: 100%;
        max-height: 300px;
        img{
            margin-right: 0px;
            width: 100%;
            height: 220px;
            border :none;
            border-radius: 0px;
            object-fit: cover;
            }
        }
}
</style>