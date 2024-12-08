import { MenuProps } from "antd";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  SwapOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import React from "react";

export const menuItems: MenuProps["items"] = [
  {
    key: "/dashboard",
    label: "Home",
    icon: React.createElement(HomeOutlined), // Corrigido com React.createElement
  },
  {
    key: "/gestor",
    label: "Gestores",
    icon: React.createElement(UsergroupAddOutlined),
  },
  {
    key: "/produtor",
    label: "Apicultores",
    icon: React.createElement(UserSwitchOutlined), // Corrigido com React.createElement
  },
  {
    key: "/servico",
    label: "Serviços",
    icon: React.createElement(SwapOutlined),
  },
];
