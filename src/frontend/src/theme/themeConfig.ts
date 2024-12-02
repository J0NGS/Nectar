import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#FFB300"
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
    }
  }
};

export default theme;