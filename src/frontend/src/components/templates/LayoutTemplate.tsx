import { Layout, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { HeaderLayout } from "../molecules/HeaderLayout";
import { MenuNavigate } from "../molecules/MenuNavigate";
import { OrgModal } from "../molecules/modais/OrgModal";
import { AuthContext } from "@/contexts/AuthContext";
import { UserService } from "@/services/userService/service";
import { User } from "@/types/authTypes";

export const LayoutTemplate: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [editOrgModal, setEditOrgModal] = useState(false);
  const [initialData, setInitialData] = useState<User>();
  const { user } = useContext(AuthContext);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onOpenOrg = async () => {
    if(user?.id) {
      const res = await UserService.getById(user.id);
      setInitialData(res.data);
      setEditOrgModal(!editOrgModal)
    }
  }
  return (
    <Layout hasSider className="h-screen">
      <Sider
        style={{ position: "fixed", zIndex: 1, height: "100vh" }}
        collapsed={collapsed}
        onCollapse={setCollapsed}
        className="bg-primary"
      >
        <div className="flex items-center w-full justify-center p-4">
         <span className="font-extrabold text-xl text-[#FFF]">NECTAR</span>
        </div>
        <MenuNavigate />
      </Sider>
      <Layout style={{ marginInlineStart: 200, height: 'calc(100% - 24px)'}}>
        <HeaderLayout
          style={{
            position: "fixed",
            width: "calc(100% - 200px)",
            zIndex: 1,
            top: 0,
          }}
          onClick={onOpenOrg}
        />
        <Content
          className="p-6 rounded-md"
          style={{
            background: colorBgContainer,
            margin: "85px 16px 0 16px",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "visible",
            scrollbarWidth: "none",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
      <OrgModal isOpen={editOrgModal} onClose={()=>setEditOrgModal(!editOrgModal)} initialData={initialData}/>
    </Layout>
  );
};
