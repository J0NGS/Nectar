import { MenuProps } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import React from "react";

export const menuItems: MenuProps['items'] = [
  {
    key: "/produtor",
    label: "Home",
    icon: React.createElement(HomeOutlined), // Corrigido com React.createElement
  },
  {
    key: "/gestor",
    label: "Gestor",
    icon: React.createElement(UserOutlined),
  },
  {
    key: "/servico",
    label: "Serviços",
    icon: React.createElement(SwapOutlined),
  },
];
