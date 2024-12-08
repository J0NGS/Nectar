import { Menu, MenuProps } from "antd";
import { menuItems } from "./menuItems";
import { useNavigate } from "react-router-dom";

export const MenuNavigate:React.FC<MenuProps> = () => {
    const navigate = useNavigate();

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        navigate(e.key); // Navega para a rota correspondente
    };

    return (
        <Menu
            className="h-full"
            theme="light"
            mode="inline"
            defaultSelectedKeys={["/produtor"]}
            items={menuItems}
            onClick={handleMenuClick}
        />
    );
};