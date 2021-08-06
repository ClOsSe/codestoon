<template>
  <div class="md-layout-column">
      <!-- menu header -->
    <md-toolbar class="md-default">
      <md-button class="md-icon-button" @click="showNavigation = !showNavigation">
        <md-icon>menu</md-icon>
      </md-button>

      <div class="md-toolbar-section-end">
          <img class="logo" src="/favicon.ico" alt="logo">
      </div>
    </md-toolbar>
    <!-- side panel -->
    <md-drawer class="" dir="rtl" md-permanent="full"  md-right md-swipeable  :md-active.sync="showNavigation">
      <md-toolbar class="card-side-panel md-transparent md-layout md-gutter md-alignment-center-center" md-elevation="0">
            <md-avatar class="md-avatar-icon md-large ">
                <img class="center user-avatar" src="/user_avatar.jpg" alt="logo">
            </md-avatar>
      </md-toolbar>

        <md-list>
            <SidePanel />     
        </md-list>
     
    </md-drawer>


  </div>
</template>

<script>
import SidePanel from "./sidepanel"
  export default {
      components:{
          SidePanel
      },
    name: 'Temporary',
    data(){
      return{
        showNavigation: false,
      }
    }
  }
</script>

<style lang="scss" scoped>
   
  .page-container {
    min-height: 300px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
  }
  .logo{
      max-width: 35px;
      max-height: 35px;
  }
  .card-side-panel{
      padding: 10px;
      overflow: hidden;
      .user-avatar{
          width: 100%;
      }
  }
</style>