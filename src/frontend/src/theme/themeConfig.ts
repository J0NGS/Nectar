import type { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#FFB300",
    borderRadius: 4,
  },
  components:{
    Menu:{
      iconSize:25
    },
    Button:{
      borderRadius:4,
    },
    Input:{
      borderRadius:2
    },
    Layout:{
      headerBg: "linear-gradient(90deg, rgba(249,208,12,1) 0%, rgba(255,198,19,1) 47%, rgba(255,179,0,1) 100%)",
      headerColor: "#fff",
    },
  }
};