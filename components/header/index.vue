<template>
    <div>
        <div class="md-xsmal-hide">
            <Desktop />
        </div>
        <div class="md-xlarge-hide md-large-hide">
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
