<template>
  <div dir="rtl">
    <!-- first fold image and title -->
    <div>
      <TitleDescription />
    </div>
    <!-- sec fold show category -->
    <div>
      <div class="row col-12">
      <Title Title="دسته‌بندی‌ها" />
      </div>
      <div>
        <div class="category center row col-12">
          <span class="col-4"  v-for="(item , index) in category" :key="index">
            <Card class="" :course="item"/>
          </span>
        </div>
        <div>
          <ShowMore :routeName="routeName"></ShowMore>
        </div>
      </div>
    </div>
    <!-- therd  fold show all courses -->
    <div>
      <div class="row col-12">
      <Title Title="دوره‌ها" />
      </div>
      <div class="category center row col-12">
        <span class="col-4"  v-for="(item , index) in courses" :key="index">
          <Card class="" :course="item"/>
        </span>
      </div>
      <div>
        <ShowMore :routeName="routeName"></ShowMore>
      </div>
    </div>


  </div>
</template>

<script>
import Title from "../components/title"
import TitleDescription from "../components/index_title_description/index.vue"
import Card from "../components/main_card/index.vue"
export default {
  components:{
    TitleDescription,
    Card,
    Title,
    
  },
  data(){
    return{
      courses:[
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
      category:[
        { 
          id:0,
          imageUrl:'/backend.jpg',
          title:'برنامه نویسی وب فرانت-اند',
          lenght:'500',
          topics:'220',
          shortDescription:''
        },
        { 
          id:1,
          imageUrl:'/front.jpg',
          title:'برنامه نویسی وب بک-اند',
          lenght:'90',
          topics:'20',
          shortDescription:''
        },
        { 
          id:2,
          imageUrl:'/java.png',
          title:'برنامه نوسی موبایل - جاوا',
          lenght:'120',
          topics:'50',
          shortDescription:''
        },
        { 
          id:3,
          imageUrl:'/database.jpg',
          title:'بانک های اطلاعاتی',
          lenght:'120',
          topics:'50',
          shortDescription:''
        },
        { 
          id:4,
          imageUrl:'/os.png',
          title:'سیستم عامل',
          lenght:'120',
          topics:'50',
          shortDescription:''
        },
        { 
          id:5,
          imageUrl:'/security.jpg',
          title:'امنیت',
          lenght:'120',
          topics:'50',
          shortDescription:''
        }
      ],
      routeName:'showAllCourses',
      
    }
  }
}
</script>
<style lang="scss" scoped>
.category{
  display: flex;
  span{
    padding: 20px;
  }
}

</style>
