<template>
    <div class="items">
        <md-list-item class="md-layout md-gutter md-alignment-center-right">
          <md-icon>account_circle</md-icon>
          <span class="md-list-item-text">
              <NuxtLink class="NuxtLink" to="">
              ورود / ثبت نام
              </NuxtLink>
            </span>
        </md-list-item>

        <md-list-item class="md-layout md-gutter md-alignment-center-right">
          <md-icon>videocam</md-icon>
          <span class="md-list-item-text">
              <NuxtLink class="NuxtLink" to="">
              دوره‌ها
              </NuxtLink>
            </span>
        </md-list-item>

        <md-list-item class="md-layout md-gutter md-alignment-center-left">
          <md-icon>receipt</md-icon>
          <span class="md-list-item-text">
              <NuxtLink class="NuxtLink" to="">
              مقالات
              </NuxtLink>
            </span>
        </md-list-item>

        <md-list-item class="md-layout md-gutter md-alignment-center-left">
          <md-icon>info</md-icon>
          <span class="md-list-item-text">
              <NuxtLink class="NuxtLink" to="">
              درباره ما
              </NuxtLink>
            </span>
        </md-list-item>

        <md-list-item class="md-layout md-gutter md-alignment-center-left">
          <md-icon>place</md-icon>
          <span class="md-list-item-text">
              <NuxtLink class="NuxtLink" to="">
              ارتباط با ما
              </NuxtLink>
            </span>
        </md-list-item>
    </div>
</template>
<style lang='scss' scoped>
.items{
    md-list-item{
        padding: 0px 0px !important;
    }
}
span{
    padding: 7px;
    text-align: right !important;
    .NuxtLink{
        color: $links !important;
        font-family: vazir_light;
    }
}
</style>
    
