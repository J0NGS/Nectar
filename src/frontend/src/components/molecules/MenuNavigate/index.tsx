import { Menu, MenuProps } from "antd";
import { menuItems } from "./menuItems";
import { useNavigate } from "react-router-dom";

export const MenuNavigate: React.FC<MenuProps> = ({...rest}) => {
  const navigate = useNavigate();

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    navigate(e.key); // Navega para a rota correspondente
  };

  return (
    <Menu
      className="h-full border-none"
      theme="light"
      mode="inline"
      defaultSelectedKeys={["/dashboard"]}
      items={menuItems}
      onClick={handleMenuClick}
      style={{borderInlineEnd: "none"}}
      {...rest}
    />
  );
};
