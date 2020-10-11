<template>
  <v-app id="inspire">
    <!-- サイドナビゲーション  -->
    <v-navigation-drawer v-model="drawer" app>
      <SideNav></SideNav>
    </v-navigation-drawer>

    <!-- タイトル -->
    <v-app-bar app color="light-green" align="center">
      <v-app-bar-nav-icon @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>
      <v-toolbar-title class="color-white">{{pageTitle}}</v-toolbar-title>
    </v-app-bar>

    <v-main style="background-color:#ECEFF1">
      <v-container fluid>
        <v-card class="pa-2" outlined tile>
          <router-view />
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
<style>
.color-white {
  color: white;
}
</style>

<script>
import SideNav from "./components/SideNav";

export default {
  name: "App",
  components: {
    SideNav
  },

  data: () => ({
    drawer: true,
    pageTitle:"サンプルアプリ"
  })
};
</script>
