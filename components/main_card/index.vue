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
                    <p v-if="cardInfo.isCategory == true"  align="right" class="icon  md-alignment-center-right" >تعداد ویدیو‌ها</p>
                    <p v-if="cardInfo.isCourse == true"  align="right" class="icon  md-alignment-center-right" >تعداد ساعت دوره</p>
                    <p v-if="cardInfo.lenght" style="margin:5px;margin-left:10px;margin-top:10px"  class="course-lenght md-alignment-center-right" >{{ cardInfo.lenght }}</p>
                    <div class="" style="margin:auto"></div>
                    <p v-if="cardInfo.isCategory == true"  align="right" class="icon  md-alignment-center-right" >تعداد دوره‌ها</p>
                    <p v-if="cardInfo.isCourse == true"  align="right" class="icon  md-alignment-center-right" >تعداد ویدیو‌های دوره</p>
                    <p style="margin:5px;margin-left:10px;margin-top:10px"  class="course-lenght md-alignment-center-right" v-if="cardInfo.topics">{{ cardInfo.topics }}</p>
                </div>
              <!-- </md-card-header> -->
                <!-- description -->
                <p class="short-description" :class="cardInfo.isCategory ? 'short-description-category' : cardInfo.isCourse ? 'short-description-course' : '' " v-if="cardInfo.shortDescription">{{cardInfo.shortDescription}}</p>
                <div v-if="cardInfo.isCourse" class="course-level row col-12" :class="cardInfo.level =='biginner' ? 'course-level-biginner' : cardInfo.level == 'advanced' ? 'course-level-advanced' :'course-level-intermediate' " >
                    <span id="one"></span>
                    <span id="tow"></span>
                    <span id="three"></span>
                    <p class="level" v-if="cardInfo.level == 'advanced'">پیشرفته</p>
                    <p class="level" v-if="cardInfo.level == 'biginner'">مبتدی</p>
                    <p class="level" v-if="cardInfo.level == 'medium'">متوسط</p>
                </div>
                    <p v-if="cardInfo.isCourse" class="course-price">قیمت : {{cardInfo.price}} تومان</p>
              </md-card-content>
              <!-- <md-card-content  > -->
                <md-card-actions v-if="cardInfo.CommingSoon" class="card-action md-alignment-center-center vazir-light">
                    <md-button style="margin-top:15px" class="md-button btn-bye md-primary md-dense md-raised col-11">نمایش جزئیات</md-button>
                </md-card-actions>
              <!-- </md-card-content> -->
              <!-- tags if its article this row will display -->
              <md-card-content v-if="cardInfo.tags">
                  <div class="row flex col-12 tags">
                      <div class="cneter tag-box" v-for="(item,index) in cardInfo.tags" :key="index">
                          <router-link to="/">
                            <p class="tag-item mouse-cursor vazir-light"  >#  {{item}}</p>
                        </router-link>
                      </div>
                  </div>
              </md-card-content>
                <!-- action -->
              <md-card-actions v-if="cardInfo.isCourse" class="card-action">
                <md-button class="md-button btn-bye md-primary md-dense md-raised col-11">خرید</md-button>
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

@media only screen  and (min-width: 1601px) {
  .card{
    cursor:auto;
    width: 100% !important;
    border-radius: 20px;
    box-shadow: 0px 0px 10px gray;
    overflow: hidden;
    max-width: 520px;
    .category-picture{
        cursor:auto;
        padding: 0;
        width: 100%;
        .box-cover{
            width: 100%;
            // max-height: 450px;
            // min-height: 385px;
            img{
                margin-right: 0px;
                width: 100%;
                height: 310px;
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
        font-size: 15px;
       a{
           color: rgb(53, 69, 156);
       } 
    }
    .sub-title{
        font-size: 25px;
        div{
            direction: rtl;
            display: flex;
            height: 60px;
        }
        p{
            padding-top: 20px;
        }
        .icon{
            margin:5px;margin-right:10px;margin-top:10px;
        }
    }
    .first-box{
        cursor:auto;
        min-height: 270px;
        background-color: #ffffff;
        border-radius: 15px;
        margin-top: -25px;
        position: relative;
        .card-content{
            padding:20px;
            padding-top: 25px;
            max-height: 357px;
            font-family: vazir_light;
            text-align: justify;
            p{
                font-size: 24px;
                // padding-top: 15px;
                // max-height: 85px;
                // overflow: hidden;
            }
            .short-description{
                font-size: 28px;
                line-height: 1.2;
            }
            .short-description-category{
                min-height: 160px ;
            }
            .short-description-course{
                min-height: 195px ;
            }
            .course-level{
                // min-width:12px;
                min-height:70px;
                // padding:20px;
                position: absolute;
                display: flex;
                padding-left:30px;
                .level{
                    position: relative;
                    margin-left:50px;
                    margin-top: 5px;
                }
            }
            .course-price{
                min-height:70px;
            }
            .course-level-biginner{
                direction: ltr;
                text-align: left;
                span{
                    min-width:10px;
                    min-height:23px;
                    margin-bottom:5px;
                    position: absolute;
                    border-radius: 2px;
                }
                #one{
                    background-color: rgb(36, 197, 36);
                    margin-left:5px;
                }
                #tow{
                    background-color: rgb(84, 148, 84);
                    margin-left:20px;
                }
                #three{
                    background-color: gray;
                    margin-left:35px;
                }
            }
            .course-level-intermediate{
                    direction: ltr;
                    text-align: left;
                span{
                    min-width:10px;
                    min-height:23px;
                    margin-bottom:5px;
                    position: absolute;
                    border-radius: 2px;
                }
                #one{
                    background-color: rgb(15, 127, 202);
                    margin-left:5px;
                }
                #tow{
                    background-color: rgb(75, 149, 199);
                    margin-left:20px;
                }
                #three{
                    background-color: gray;
                    margin-left:35px;
                }
                
            }
            .course-level-advanced{
                direction: ltr;
                text-align: left;
                span{
                    min-width:10px;
                    min-height:23px;
                    margin-bottom:5px;
                    position: absolute;
                    border-radius: 2px;
                }
                #one{
                    background-color:#ee6d93;
                    margin-left:5px;
                }
                #tow{
                    background-color:#ee6d93;
                    margin-left:20px;
                }
                #three{
                    background-color:#ee6d93;
                    margin-left:35px;
                }
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
            .md-button{
                height: 40px !important;
                font-size: 22px;
            }
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
.tag-box{
    margin-top: 20px;
    p{
        font-size: 15px;
        color:rgb(32, 30, 30) !important;
    } 
    router-link{
    text-decoration: none;
    }
}
.card:hover{
    .box-cover{
        width: 100%;
        max-height: 300px;
        img{
            margin-right: 0px;
            width: 100%;
            height: 405px;
            border :none;
            border-radius: 0px;
            object-fit: cover;
            }
        }
}
}
@media only screen and (max-width: 1600px) {
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
            max-height: 217px;
            font-family: vazir_light;
            text-align: justify;
            p{
                max-height: 85px;
                overflow: hidden;
            }
            .course-level{
                position: absolute;
                display: flex;
                padding-left:30px;
                padding-top:15px;
                .level{
                    position: relative;
                    margin-left:37px;
                    margin-top: 0px;
                }
            }
            .course-price{
                min-height:70px;
                padding-top:10px;

            }
            .course-level-biginner{
                direction: ltr;
                text-align: left;
                span{
                    min-width:8px;
                    min-height:18px;
                    margin-bottom:5px;
                    position: absolute;
                    border-radius: 2px;
                }
                #one{
                    background-color: rgb(36, 197, 36);
                    margin-left:5px;
                }
                #tow{
                    background-color: rgb(84, 148, 84);
                    margin-left:15px;
                }
                #three{
                    background-color: gray;
                    margin-left:25px;
                }
            }
            .course-level-intermediate{
                    direction: ltr;
                    text-align: left;
                span{
                    min-width:8px;
                    min-height:18px;
                    margin-bottom:5px;
                    position: absolute;
                    border-radius: 2px;
                }
                #one{
                    background-color: rgb(15, 127, 202);
                    margin-left:5px;
                }
                #tow{
                    background-color: rgb(75, 149, 199);
                    margin-left:15px;
                }
                #three{
                    background-color: gray;
                    margin-left:25px;
                }
                
            }
            .course-level-advanced{
                direction: ltr;
                text-align: left;
                span{
                    min-width:8px;
                    min-height:18px;
                    margin-bottom:5px;
                    position: absolute;
                    border-radius: 2px;
                }
                #one{
                    background-color:#ee6d93;
                    margin-left:5px;
                }
                #tow{
                    background-color:#ee6d93;
                    margin-left:15px;
                }
                #three{
                    background-color:#ee6d93;
                    margin-left:25px;
                }
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
.tag-box{
    margin-top: 7px;
    p{
        font-size: 12px;
        color:rgb(32, 30, 30) !important;
    } 
    router-link{
    text-decoration: none;
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
}
</style>