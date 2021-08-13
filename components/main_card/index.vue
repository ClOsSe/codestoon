<template>
    <div dir="rtl" class="card row">
        <md-card md-with-hover >
            <div v-if="cardInfo.imageUrl" class="category-picture">
                <div class="box-cover">
                <img :src="cardInfo.imageUrl" :alt="cardInfo.title">
                </div>
            </div>

            <md-ripple>
              <md-card-content class="card-content">

              <!-- <md-card-header > -->
                <div class="md-title title">
                    <h2 v-if="cardInfo.title">{{ cardInfo.title }}</h2>
                </div>
                <div v-if="cardInfo.lenght || cardInfo.topics " class="md-subhead md-layout md-gutter sub-title">
                    <md-icon style="margin:5px;margin-right:20px" align="right" class="icon  md-alignment-center-right" v-if="cardInfo.lenght">watch_later</md-icon>
                    <p style="margin:5px;margin-left:20px;margin-top:10px"  class="course-lenght md-alignment-center-right" v-if="cardInfo.lenght" >{{ cardInfo.lenght }}</p>
                    <div class="" style="margin:auto"></div>
                    <md-icon style="margin:5px;margin-left:0px"  class="icon md-alignment-center-right" v-if="cardInfo.topics">check</md-icon>
                    <p style="margin:5px;margin-left:20px;margin-top:10px"  class="course-lenght md-alignment-center-right" v-if="cardInfo.topics">{{ cardInfo.topics }}</p>
                </div>
              <!-- </md-card-header> -->
                <!-- description -->
                <p v-if="cardInfo.shortDescription">{{cardInfo.shortDescription}}</p>
              </md-card-content>
              <!-- tags if its article this row will display -->
              <md-card-content v-if="cardInfo.tags">
                  <div class="row flex col-12 tags">
                      <div class="cneter tag-box" v-for="(item,index) in cardInfo.tags" :key="index">
                          <p class="tag-item vazir-light"  >{{item}}</p>
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
                    <md-icon class="md-layout-item">favorite</md-icon>
                    <p class="article-infoCounts">{{cardInfo.countOfLikes}}</p>
                    <md-icon class="md-layout-item">visibility</md-icon>
                    <p class="article-infoCounts">{{cardInfo.coutOfViews}}</p>
                </div>
              </md-card-actions>
            </md-ripple>
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
    width: 100% !important;
    border-radius: 20px;
    box-shadow: 0px 0px 10px gray;
    overflow: hidden;
    max-width: 320px;
    .category-picture{
        padding: 0;
        width: 100%;
        .box-cover{
            width: 100%;
            max-height: 300px;
            img{
                margin-right: 0px;
                width: 100%;
                height: 225px;
                border :none;
                border-radius: 0px;
            }
        }
    }
    .title{
        direction: rtl;
        text-align: right;
        font-family: vazir_medium;
        font-size: 12px;
    }
    .sub-title{
        div{
            direction: rtl;
            display: flex;
        }
    }
    .card-content{
        padding:20px;
        max-height: 247px;
        font-family: vazir_light;
        text-align: justify;
        p{
            max-height: 85px;
            overflow: hidden;
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
</style>