<template>
    <div dir="rtl">
        <div class="md-small-hide md-large ">
            <Desktop />
        </div>
        <div class="md-large-hide header-mobile">
            <Mobile />
        </div>

    </div>
</template>
<script >
import Mobile from "./mobile"
import Desktop from "./desktop"
export default {
    components:{
        Mobile,
        Desktop
    }
}
</script>
<style lang="scss" scoped>
@media only screen and (max-width: 960px) {
  .header-mobile{
      display: block !important;
  }

}
</style>
