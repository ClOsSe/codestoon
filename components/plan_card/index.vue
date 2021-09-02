<template>
    <div class="box">
        <md-card class="card" :class="planInfo.isRecomended ? 'card-recomended' : ''">
            <md-card-actions>
                <div class="row col-12 title">
                    <p class="col-4 cycle vazir-black center">{{planInfo.title}}</p>
                    <div class="col-3"></div>
                    <div class="col-4 center d-flex price vazir-medium">
                        <p >{{planInfo.price}}</p>
                        <span class="vazir-light">{{planInfo.unit}}</span>
                    </div>
                </div>
            </md-card-actions>
            <md-card-actions>
                <div class="center image row col-12">
                    <img  :src="planInfo.image" alt="">
                </div>
            </md-card-actions>
            
            <md-card-actions>
                <div class="row col-12 center description text-center vazir-light">
                    <p>{{planInfo.description}}</p>
                </div>
            </md-card-actions>
            
            <md-card-actions>
                <div class="row col-12 center action text-center vazir-light" :class="planInfo.isRecomended ? 'action-recomended-true' : 'action-recomended-false'">
                    <md-button :href="planInfo.link" class=" md-dense col-8 button" :class="planInfo.isRecomended ? 'action-recomended-true md-primary md-raised' : ''">خرید</md-button>
                </div>
            </md-card-actions>
        </md-card> 
    </div>
</template>
<script>
export default {
    props:['planInfo'],
    mounted(){
        console.log(this.planInfo);
    }
}
</script>
<style lang="scss" scoped>
@media only screen  and (min-width: 1601px){
.box{
    width: 100%;
    .card-recomended{
        border: 1px solid #448aff;
    }
    .card{
        border-radius: 17px;
        margin: 5px;
        max-width: 490px;
        .title{
        padding-top: 8px;
        font-size: 22px;
        }
        .price{
            color:#448aff;
            padding: 25px;
            p{
                padding: 10px;
                font-size: 22px;
            }
            span{
                font-size:19px
            }
        }
        .cycle{
            color:black;
        }
        .image{
            img{
                width: 220px;
                height: 175px;;
            }        
        }
        .action-recomended-true{
            .button{
                border-radius:20px;
                font-size: 22px;
            }
        }
        .action-recomended-false{
            color:black;
            font-family:vazir_light;
            .button{
                border-radius:20px;
                font-size: 20px;
            }
        }
        .action{
            margin-top: 10px;
        }
        .description{
            p{
                font-size:22px;
                line-height: 1.4;
            }
        }
    }
    
}
}
@media only screen  and (max-width: 1600px){
.box{
    width: 100%;
    .card-recomended{
        border: 1px solid #448aff;
    }
    .card{
        border-radius: 17px;
        margin: 5px;
        max-width: 320px;
        .title{
        padding-top: 5px;
        }
        .price{
            color:#448aff;
            padding: 8px;
            p{
                padding: 5px;
                font-size: 16px;
            }
            span{
                font-size:12px
            }
        }
        .cycle{
            color:black;
        }
        .image{
            img{
                width: 165px;
                height: 125px;;
            }        
        }
        .action-recomended-true{
            .button{
                border-radius:20px;
                font-size: 18px;
            }
        }
        .action-recomended-false{
            color:black;
            .button{
                font-size: 16px;
            }
        }
        .action{
            margin-top: 10px;
        }
    }
    
}
}


</style>