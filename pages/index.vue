<template>
  <div dir="rtl">
    <!-- first fold image and title -->
    <div>
      <TitleDescription />
    </div>
    <!-- sec fold category -->
    <div class="category center md-layout">
      <span class="md-layout-item center"  v-for="(item , index) in category" :key="index">
        <Category class="" :course="item"/>
      </span>
    </div>
    <div>
      <ShowMore :routeName="routeName"></ShowMore>
    </div>


  </div>
</template>

<script>
import TitleDescription from "../components/index_title_description/index.vue"
import Category from "../components/main_card/index.vue"
export default {
  components:{
    TitleDescription,
    Category
  },
  data(){
    return{
      category:[
        { 
          id:0,
          imageUrl:'/php.jpg',
          title:'آموزش 0 تا 100 php',
          lenght:'120',
          topics:'50',
          shortDescription:'شما می‌توانید با خرید این دوره از 0 تا 100 دوره php را به راحتی یاد بگیرید و فقط و فقط با خرید این دوره مشکل عدم وجود یک بسته عالی را برای همیشه برطرف کنید'
        },
        { 
          id:1,
          imageUrl:'/python.jpg',
          title:'آموزش 0 تا 100 python',
          lenght:'90',
          topics:'20',
          shortDescription:'شما می‌توانید با خرید این دوره از 0 تا 100 دوره python را به راحتی یاد بگیرید و فقط و فقط با خرید این دوره مشکل عدم وجود یک بسته عالی را برای همیشه برطرف کنید'
        },
        { 
          id:2,
          imageUrl:'/ts.png',
          title:'آموزش 0 تا 100 TypeScript',
          lenght:'120',
          topics:'50',
          shortDescription:'شما می‌توانید با خرید این دوره از 0 تا 100 دوره TypeScript را به راحتی یاد بگیرید و فقط و فقط با خرید این دوره مشکل عدم وجود یک بسته عالی را برای همیشه برطرف کنید'
        },
        { 
          id:3,
          imageUrl:'/javascript.png',
          title:'آموزش 0 تا 100 JavaScript',
          lenght:'120',
          topics:'50',
          shortDescription:'شما می‌توانید با خرید این دوره از 0 تا 100 دوره JavaScript را به راحتی یاد بگیرید و فقط و فقط با خرید این دوره مشکل عدم وجود یک بسته عالی را برای همیشه برطرف کنید'
        },
        { 
          id:4,
          imageUrl:'/quasar.png',
          title:'آموزش 0 تا 100 quasar',
          lenght:'120',
          topics:'50',
          shortDescription:'شما می‌توانید با خرید این دوره از 0 تا 100 دوره quasar را به راحتی یاد بگیرید و فقط و فقط با خرید این دوره مشکل عدم وجود یک بسته عالی را برای همیشه برطرف کنید'
        },
        { 
          id:5,
          imageUrl:'/vue.png',
          title:'آموزش 0 تا 100 vue',
          lenght:'120',
          topics:'50',
          shortDescription:'شما می‌توانید با خرید این دوره از 0 تا 100 دوره vue را به راحتی یاد بگیرید و فقط و فقط با خرید این دوره مشکل عدم وجود یک بسته عالی را برای همیشه برطرف کنید'
        }
      ],
      routeName:'showAllCourses',
      
    }
  }
}
</script>
<style lang="scss" scoped>
.category{
  max-width: 1560px;
  display: flex;
  span{
    max-width: 30%;
    padding: 10px;
    margin: 50px;
  }
}

</style>
