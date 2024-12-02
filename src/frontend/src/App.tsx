import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";

import theme from "./theme/themeConfig";
import routes from "./routes";
const App: React.FC = () => {
  return (
    <Router>
      <ConfigProvider direction="ltr" theme={theme}>
        <Routes>
        {routes.map(({ path, component: Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </ConfigProvider>
    </Router>
  );
};

export default App;
