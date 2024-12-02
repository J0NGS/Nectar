import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from 'antd';

import theme from './theme/themeConfig';
import LoginPage from "./pages/login";
const App: React.FC = () => {
  return (
    <Router>
      <ConfigProvider direction="ltr" theme={theme}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* Outras rotas */}
      </Routes>
      </ConfigProvider>
    </Router>
  );
};

export default App;
