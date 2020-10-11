import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
            primary: "#4caf50",
            secondary: "#8bc34a",
            accent: "#cddc39",
            error: "#E53935",
            warning: "#ff9800",
            info: "#F9FBE7",
            success: "#ff9800"
        },
      },
    },
  });
