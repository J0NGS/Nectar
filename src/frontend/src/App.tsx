import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import { ToastContainer } from 'react-toastify';
import { theme } from "./theme/themeConfig";
import { routes } from "./routes";
import { LayoutTemplate } from "./components/templates/LayoutTemplate";
import 'react-toastify/dist/ReactToastify.css';


const App: React.FC = () => {
  return (
    <Router>
      <ConfigProvider direction="ltr" theme={theme}>
      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        <Routes>
          {/* Rotas com template */}
          <Route path="/" element={<LayoutTemplate />} >
            {routes.withTemplate.map(({ path, component: Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
              ))}
          </Route>

          {/* Rotas sem template */}
          {routes.withoutTemplate.map(({ path, component: Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </ConfigProvider>
    </Router>
  );
};

export default App;
