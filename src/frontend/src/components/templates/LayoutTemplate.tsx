import { Layout, theme } from "antd";
import Sider from "antd/es/layout/Sider";

import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { HeaderLayout } from "../molecules/HeaderLayout";
import { MenuNavigate } from "../molecules/MenuNavigate";

export const LayoutTemplate: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="h-screen">
      <HeaderLayout style={{ padding: 0 }} />
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <MenuNavigate />
        </Sider>
        <Content
          className="mx-6 my-6 p-6 min-h-72 rounded-md"
          style={{
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
