<template>
  <div dir="rtl">
    <!-- first fold image and title -->
    <div>
      <TitleDescription />
    </div>
    <!-- sec fold show category -->
    <div class="background-lemon center row col-12">
      <div class="row col-12">
      <Title Title="دسته‌بندی‌ها" />
      </div>
      <div>
        <div class="category center row col-12">
          <div class="center col-4" v-for="(item , index) in category" :key="index">
          <span><Card class="" :cardInfo="item"/></span>
          </div>
        </div>
        <div class="row col-12">
          <ShowMore routeName="category"></ShowMore>
        </div>
      </div>
    </div>
    <!-- therd  fold show all courses -->
    <div class="center row col-12">
      <div class="row col-12">
      <Title Title="دوره‌ها" />
      </div>
      <div class="category center row col-12">
        <div class="center col-4" v-for="(item , index) in courses" :key="index">
          <span><Card :cardInfo="item"/></span>
        </div>
      </div>
      <div class="row col-12">
        <ShowMore routeName="courses"></ShowMore>
      </div>
    </div>
    <!-- the plan sec -->
    <div class="center row col-12">
    <div class="plans">
      <div class="row col-12 center">
        <Title class="text-h5" Title="پلنی رو انتخاب کنید که مناسب نیازتون باشه" />
        <div class="col-4 text-center">
          <p class="vazir-light plans-description">با خرید یکی از این پلن ها تنها در چند دقیقه از تمامی امکانات سایت بهرمند شوید </p>
        </div>
      </div>
      <div class="row col-12 center">
        <div class="center">
        <div class="center col-3">
          <Plan :planInfo="planInfo[0]"></Plan>
        </div>
        <div class="center col-3">
          <Plan :planInfo="planInfo[1]"></Plan>
        </div>
        <div class="center col-3">
          <Plan :planInfo="planInfo[2]"></Plan>
        </div>
        </div>
      </div>
    </div>
    </div>
    <!-- the last articles -->
    <div class="center row col-12">
      <div class="row col-12 center">
        <Title class="text-h5" Title="آخرین مقالات" />
        <div class="row col-12 center">
          <div class="category center row col-12">
            <div class="center col-4" v-for="(item , index) in articles" :key="index">
              <span><Card :cardInfo="item"/></span>
            </div>
          </div>
        </div>
      </div>
      <div class="row col-12">
        <ShowMore routeName="articles"></ShowMore>
      </div>
    </div>


  </div>
</template>

<script>
import Title from "../components/title"
import TitleDescription from "../components/index_title_description"
import Card from "../components/main_card"
import Plan from "../components/plan_card"
export default {
  components:{
    TitleDescription,
    Card,
    Title,
    Plan,
    
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
          shortDescription:'شما می‌توانید با خرید این دوره از 0 تا 100 دوره php را به راحتی یاد بگیرید و فقط و فقط با خرید این دوره مشکل عدم وجود یک بسته عالی را برای همیشه برطرف کنید',
          isCourse:true,
        },
        { 
          id:1,
          imageUrl:'/python.jpg',
          title:'آموزش 0 تا 100 python',
          lenght:'90',
          topics:'20',
          shortDescription:'شما می‌توانید با خرید این دوره از 0 تا 100 دوره python را به راحتی یاد بگیرید و فقط و فقط با خرید این دوره مشکل عدم وجود یک بسته عالی را برای همیشه برطرف کنید',
          isCourse:true,
        },
        { 
          id:2,
          imageUrl:'/ts.png',
          title:'آموزش 0 تا 100 TypeScript',
          lenght:'120',
          topics:'50',
          shortDescription:'شما می‌توانید با خرید این دوره از 0 تا 100 دوره TypeScript را به راحتی یاد بگیرید و فقط و فقط با خرید این دوره مشکل عدم وجود یک بسته عالی را برای همیشه برطرف کنید',
          isCourse:true,
        },
        { 
          id:3,
          imageUrl:'/javascript.png',
          title:'آموزش 0 تا 100 JavaScript',
          lenght:'120',
          topics:'50',
          shortDescription:'شما می‌توانید با خرید این دوره از 0 تا 100 دوره JavaScript را به راحتی یاد بگیرید و فقط و فقط با خرید این دوره مشکل عدم وجود یک بسته عالی را برای همیشه برطرف کنید',
          isCourse:true,
        },
        { 
          id:4,
          imageUrl:'/quasar.png',
          title:'آموزش 0 تا 100 quasar',
          lenght:'120',
          topics:'50',
          shortDescription:'شما می‌توانید با خرید این دوره از 0 تا 100 دوره quasar را به راحتی یاد بگیرید و فقط و فقط با خرید این دوره مشکل عدم وجود یک بسته عالی را برای همیشه برطرف کنید',
          isCourse:true,
        },
        { 
          id:5,
          imageUrl:'/vue.png',
          title:'آموزش 0 تا 100 vue',
          lenght:'120',
          topics:'50',
          shortDescription:'شما می‌توانید با خرید این دوره از 0 تا 100 دوره vue را به راحتی یاد بگیرید و فقط و فقط با خرید این دوره مشکل عدم وجود یک بسته عالی را برای همیشه برطرف کنید',
          isCourse:true,
        }
      ],
      category:[
        { 
          id:0,
          imageUrl:'/backend.jpg',
          title:'برنامه نویسی وب فرانت-اند',
          lenght:'500',
          topics:'220',
          shortDescription:'تمامی دوره های مربوط به طراحی پایگاه داده و بک اند سایت را در این قسمت پیدا کنید',
          isCourse:false,
        },
        { 
          id:1,
          imageUrl:'/front.jpg',
          title:'برنامه نویسی وب بک-اند',
          lenght:'90',
          topics:'20',
          shortDescription:'تمامی دوره های مربوط به طراحی هویت بصری و فرانت سایت را در این قسمت پیدا کنید',
          isCourse:false,
        },
        { 
          id:2,
          imageUrl:'/java.png',
          title:'برنامه نوسی موبایل - جاوا',
          lenght:'120',
          topics:'50',
          shortDescription:'تمامی دوره های مربوط به اپلیکیشن های موبایل با زبان جاوا را در این قسمت پیدا کنید',
          isCourse:false,
        },
        { 
          id:3,
          imageUrl:'/database.jpg',
          title:'بانک های اطلاعاتی',
          lenght:'500',
          topics:'160',
          shortDescription:'تمامی دوره های مربوط به طراحی پایگاه را در این قسمت پیدا کنید',
          isCourse:false,
        },
        { 
          id:4,
          imageUrl:'/os.png',
          title:'سیستم عامل',
          lenght:'60',
          topics:'15',
          shortDescription:'تمامی دوره های مربوط به سیستم عامل را در این قسمت پیدا کنید',
          isCourse:false,
        },
        { 
          id:5,
          imageUrl:'/security.jpg',
          title:'امنیت',
          lenght:'50',
          topics:'10',
          shortDescription:'تمامی دوره های مربوط به امنیت را در این قسمت پیدا کنید',
          isCourse:false,
        }
      ],
      planInfo:[
        {
          title:'ماهانه',
          unit:'تومان',
          price:150000,
          description:'این یک توضیح کوتاه در مورد پلن های فروشی می باشد این یک توضیح کوتاه در مورد پلن های فروشی می باشد این یک توضیح کوتاه در مورد پلن های فروشی می باشد',
          isRecomended:false,
          image:'/plan.svg',
          link:'/',
        },
        {
          title:'اشتراک ویژه',
          unit:'تومان',
          price:500000,
          description:'این یک توضیح کوتاه در مورد پلن های فروشی می باشد این یک توضیح کوتاه در مورد پلن های فروشی می باشد این یک توضیح کوتاه در مورد پلن های فروشی می باشد',
          isRecomended:true,
          image:'/vip.svg',
          link:'/',
        },
        {
          title:'سالیانه',
          unit:'تومان',
          price:1440000,
          description:'این یک توضیح کوتاه در مورد پلن های فروشی می باشد این یک توضیح کوتاه در مورد پلن های فروشی می باشد این یک توضیح کوتاه در مورد پلن های فروشی می باشد',
          isRecomended:false,
          image:'/plan1.svg',
          link:'/',
        },
      ],
      articles:[
         { 
          id:0,
          imageUrl:'/article1.png',
          title:'نکاتی برای ساخت نمونه کار عالی',
          shortDescription:`هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی اگر به صورت فریلنسری هم کار می‌کنید مشتری شما دوست دارد قبل از آنکه کار خود را به شما بسپارد نمونه کارهایتان را ببیند. از این رو تمرکز بر نمونه کار و ایجاد کارهایی که شما را از بقیه متمایز سازد ضروری است.
          در این مقاله می‌خواهیم برخی از نکات مهم برای ایجاد نمونه کارهای عالی را بیان کنیم.`,
          isArticle:true,
          tags:['روشهایی برای ساخت نمونه کار','نکاتی برای ساخت نمونه کار'],
          countOfCumments:'20',
          countOfLikes:'30',
          coutOfViews:'50',
        },
         { 
          id:2,
          imageUrl:'/article1.png',
          title:'نکاتی برای ساخت نمونه کار عالی',
          shortDescription:`هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی اگر به صورت فریلنسری هم کار می‌کنید مشتری شما دوست دارد قبل از آنکه کار خود را به شما بسپارد نمونه کارهایتان را ببیند. از این رو تمرکز بر نمونه کار و ایجاد کارهایی که شما را از بقیه متمایز سازد ضروری است.
          در این مقاله می‌خواهیم برخی از نکات مهم برای ایجاد نمونه کارهای عالی را بیان کنیم.`,
          isArticle:true,
          tags:['روشهایی برای ساخت نمونه کار','نکاتی برای ساخت نمونه کار'],
          countOfCumments:'20',
          countOfLikes:'30',
          coutOfViews:'50',
        },
         { 
          id:3,
          imageUrl:'/article1.png',
          title:'نکاتی برای ساخت نمونه کار عالی',
          shortDescription:`هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی اگر به صورت فریلنسری هم کار می‌کنید مشتری شما دوست دارد قبل از آنکه کار خود را به شما بسپارد نمونه کارهایتان را ببیند. از این رو تمرکز بر نمونه کار و ایجاد کارهایی که شما را از بقیه متمایز سازد ضروری است.
          در این مقاله می‌خواهیم برخی از نکات مهم برای ایجاد نمونه کارهای عالی را بیان کنیم.`,
          isArticle:true,
          tags:['روشهایی برای ساخت نمونه کار','نکاتی برای ساخت نمونه کار'],
          countOfCumments:'20',
          countOfLikes:'30',
          coutOfViews:'50',
        },
         { 
          id:4,
          imageUrl:'/article1.png',
          title:'نکاتی برای ساخت نمونه کار عالی',
          shortDescription:`هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی اگر به صورت فریلنسری هم کار می‌کنید مشتری شما دوست دارد قبل از آنکه کار خود را به شما بسپارد نمونه کارهایتان را ببیند. از این رو تمرکز بر نمونه کار و ایجاد کارهایی که شما را از بقیه متمایز سازد ضروری است.
          در این مقاله می‌خواهیم برخی از نکات مهم برای ایجاد نمونه کارهای عالی را بیان کنیم.`,
          isArticle:true,
          tags:['روشهایی برای ساخت نمونه کار','نکاتی برای ساخت نمونه کار'],
          countOfCumments:'20',
          countOfLikes:'30',
          coutOfViews:'50',
        },
         { 
          id:5,
          imageUrl:'/article1.png',
          title:'نکاتی برای ساخت نمونه کار عالی',
          shortDescription:`هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی اگر به صورت فریلنسری هم کار می‌کنید مشتری شما دوست دارد قبل از آنکه کار خود را به شما بسپارد نمونه کارهایتان را ببیند. از این رو تمرکز بر نمونه کار و ایجاد کارهایی که شما را از بقیه متمایز سازد ضروری است.
          در این مقاله می‌خواهیم برخی از نکات مهم برای ایجاد نمونه کارهای عالی را بیان کنیم.`,
          isArticle:true,
          tags:['روشهایی برای ساخت نمونه کار','نکاتی برای ساخت نمونه کار'],
          countOfCumments:'20',
          countOfLikes:'30',
          coutOfViews:'50',
        },
         { 
          id:6,
          imageUrl:'/article1.png',
          title:'نکاتی برای ساخت نمونه کار عالی',
          shortDescription:`هنگام درخواست کار، شرکت‌ها نگاهی به نمونه کارهای شما دارند. حتی اگر به صورت فریلنسری هم کار می‌کنید مشتری شما دوست دارد قبل از آنکه کار خود را به شما بسپارد نمونه کارهایتان را ببیند. از این رو تمرکز بر نمونه کار و ایجاد کارهایی که شما را از بقیه متمایز سازد ضروری است.
          در این مقاله می‌خواهیم برخی از نکات مهم برای ایجاد نمونه کارهای عالی را بیان کنیم.`,
          isArticle:true,
          tags:['روشهایی برای ساخت نمونه کار','نکاتی برای ساخت نمونه کار'],
          countOfCumments:'20',
          countOfLikes:'30',
          coutOfViews:'50',
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.category{
  max-width: 1600px;
  span{
    padding: 20px;
  }
  
}
.plans{
    text-align:justify;
    
    .plans-description{
      padding: 2px;
      margin-top: -10px;
      margin-bottom: 10px;
      color: gray;
    }
  }


</style>
