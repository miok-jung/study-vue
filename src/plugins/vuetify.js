// Styles
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css"; // CSS 없으면 아이콘이 보이지 않음

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "myCustomTheme",
    themes: {
      myCustomTheme: {
        dark: false,
        colors: {
          background: "#f5e8c7",
          surface: "#ecccb2",
          primary: "#deb6ab",
          secondary: "#03DAC6",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
  },
});
