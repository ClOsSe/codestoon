<template>
    <div dir="rtl" class="card row col-12">
        <md-card md-with-hover class="col-12">
            <div class="category-picture">
                <div class="box-cover">
                <img :src="course.imageUrl" :alt="course.title">
                </div>
            </div>

            <md-ripple>
              <md-card-content class="card-content">

              <!-- <md-card-header > -->
                <div class="md-title title">
                    <h2>{{ course.title }}</h2>
                </div>
                <div class="md-subhead md-layout md-gutter sub-title">
                    <md-icon style="margin:5px;margin-right:20px" align="right" class="icon  md-alignment-center-right">watch_later</md-icon>
                    <p style="margin:5px;margin-left:20px;margin-top:10px"  class="course-lenght md-alignment-center-right">{{ course.lenght }}</p>
                    <div class="" style="margin:auto"></div>
                    <md-icon style="margin:5px;margin-left:0px"  class="icon md-alignment-center-right">check</md-icon>
                    <p style="margin:5px;margin-left:20px;margin-top:10px"  class="course-lenght md-alignment-center-right">{{ course.topics }}</p>
                </div>
              <!-- </md-card-header> -->

              <!-- <md-card-content class="card-content"> -->
                <p>{{course.shortDescription}}</p>
              </md-card-content>

              <md-card-actions class="card-action">
                <md-button class="md-primary md-dense md-raised">خرید</md-button>
              </md-card-actions>
            </md-ripple>
        </md-card>
    </div>
</template>
<script>
export default {
    props:['course'],
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
    }
}
</style>