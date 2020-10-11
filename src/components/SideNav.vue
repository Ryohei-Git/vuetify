<template>
  <v-card height="100%" width="256" class="mx-auto" tile >
    <v-list-item list @click="goHome" style="background-color:#069688;">
      <v-list-item-title class="title" style="color:white">SampleApp</v-list-item-title>
    </v-list-item>

    <v-list dense nav>
      <v-list-item v-for="(item,i) in items" :key="i" link @click="movePage(i)">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "サイドナビ１", icon: "mdi-home-city" },
        { title: "サイドナビ２", icon: "mdi-view-dashboard" },
        { title: "サイドナビ３", icon: "mdi-domain" }
      ],
      right: null
    };
  },
  methods: {
    goHome: function() {
      this.$router.push("/");
    },
    movePage: function(i) {
      if (i == 0 && this.$route.path != "/page1") {
        this.$router.push("/page1");
      } else if (i == 1 && this.$route.path != "/page2") {
        this.$router.push("/page2");
      } else if (i == 2 && this.$route.path != "/page3") {
        this.$router.push("/page3");
      }
    }
  }
};
</script>