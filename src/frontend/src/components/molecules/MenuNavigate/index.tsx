import { Menu, MenuProps } from "antd";
import { menuItems } from "./menuItems";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";

export const MenuNavigate: React.FC<MenuProps> = ({ ...rest }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const activePath = useMemo(() => {
    const path = location.pathname;
    const pathSplit = path.split("/");
    return `/${pathSplit[1]}`;
  }, [location.pathname]);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    navigate(e.key); // Navega para a rota correspondente
  };

  return (
    <Menu
      className="h-full border-none"
      theme="light"
      mode="inline"
      selectedKeys={[activePath]}
      items={menuItems}
      onClick={handleMenuClick}
      style={{ borderInlineEnd: "none" }}
      {...rest}
    />
  );
};
