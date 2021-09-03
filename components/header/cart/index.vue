<template>
  <div>
     <div class="cart-box">
        <cart class="cart" :size="innerWidth > 1600 ? 35 : 25"/>
        <div class="cart-content md-animation ">
            <div class="content col-12 row" v-for="(item , index) in cartItem" :key="index">
                <div class="image col-3 center">
                    <img :src="item.picture" alt="">
                </div>
                <div class="name col-3 center vazir-light">
                    {{item.name}}
                </div>
                <div class="price col-3 center vazir-light">
                    {{item.price}} تومان
                </div>
                <!-- <div class="count col-3 center" >
                    <div class="center col-4">
                        <plus class="plus" /> 
                    </div>
                    <div class="center col-4 vazir-light">
                        <p> {{item.count}}</p>
                    </div>
                    <div class="center col-4">
                        <minus class="minus" />
                    </div>
                </div> -->
            </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            innerWidth:0,
            cartItem:[
                {
                    id:0,
                    name:"آموزش 0 تا 100 php",
                    count:10,
                    price:100000,
                    picture:'/php.jpg'
                },
                {
                    id:1,
                    name:"آموزش 0 تا 100 java",
                    count:10,
                    price:100000,
                    picture:'/java.png'
                },
                {
                    id:2,
                    name:"آموزش 0 تا 100 quasar",
                    count:10,
                    price:100000,
                    picture:'/quasar.png'
                },
            ],
        }
    },
    mounted(){
        this.innerWidth =  window.innerWidth
        }
}
</script>

<style lang="scss" scoped>
@media only screen  and (min-width: 1601px) {

    .cart-box{
        position: relative;
        .cart{
            color:wheat;
            cursor: pointer;
            width: 50px;
        }
        // TODO:animation collaps needed
        .cart-content{
            display: none;
            border-radius:5px;
            padding: 5px;
            width: 630px;
            left: 0;
            position: absolute;
            background: white;
            box-shadow: 0px 0px 0px darkgray;
            overflow: hidden;
            animation-duration: 4s;
            animation-name: height;
            .content{
                display: flex;
                padding-top:10px;
                padding-bottom: 10px;
                border: 1px solid lightgray;
                margin-block: 3px;
                border-radius: 3px;
                .image{
                    max-width: 130px;
                    padding: 2px;
                    overflow: hidden;
                    border-radius: 10px;
                    img{
                        width: 100%;
                    }
                }
                .name{
                    width: 250px;
                    padding: 2px;
                    overflow: hidden;
                    font-size: 24px;
                }
                .price{
                    width: 210px;
                    padding: 2px;
                    overflow: hidden;
                    font-size:24px;
                }
        //         .count{
        //             width: 100px;
        //             position: relative;
        //             left: 0;
        //             overflow: hidden;
        //             .plus{
        //                 padding-left: 5px;
        //                 cursor: pointer;
        //             }
        //             .minus{
        //                 padding-right: 5px;
        //                 cursor: pointer;
        //             }
        //         }
            }
        }
    }
}
@media only screen  and (max-width: 1600px) {

    .cart-box{
        position: relative;
        .cart{
            color:wheat;
            cursor: pointer;
            widows: 24px;
        }
        // TODO:animation collaps needed
        .cart-content{
            display: none;
            border-radius:5px;
            padding: 5px;
            width: 430px;
            left: 0;
            position: absolute;
            background: white;
            box-shadow: 0px 0px 0px darkgray;
            overflow: hidden;
            animation-duration: 4s;
            animation-name: height;
            .content{
                display: flex;
                padding-top:5px;
                padding-bottom: 5px;
                border: 1px solid lightgray;
                margin-block: 3px;
                border-radius: 3px;
                .image{
                    max-width: 70px;
                    padding: 2px;
                    overflow: hidden;
                    border-radius: 10px;
                    img{
                        width: 100%;
                    }
                }
                .name{
                    width: 210px;
                    padding: 2px;
                    overflow: hidden;
                    font-size: 19px;
                }
                .price{
                    width: 120px;
                    padding: 2px;
                    overflow: hidden;
                    font-size: 19px;

                }
            //     .count{
            //         width: 100px;
            //         position: relative;
            //         left: 0;
            //         overflow: hidden;
            //         .plus{
            //             padding-left: 5px;
            //             cursor: pointer;
            //         }
            //         .minus{
            //             padding-right: 5px;
            //             cursor: pointer;
            //         }
            //     }
            }
        }
        
    }
}

.cart-box:hover{
    .cart-content{
        display: block;
    }
}
</style>