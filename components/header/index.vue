<template>
    <div dir="rtl">
        <div class="md-xsmall-hide md-large " >
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
@media (min-width: 601px){
  .header-mobile{
      display: none !important;
  }
}
@media (min-width: 0px) and (max-width: 600px) {
  .header-mobile{
      display: unset !important;
  }
}
</style>
