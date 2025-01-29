import { Flex, Image } from "antd";
import { BasicProps, Header } from "antd/es/layout/layout";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
export const HeaderLayout: React.FC<BasicProps & React.RefAttributes<HTMLElement>> = ({onClick,children,...rest}) => {
    const { user } = useContext(AuthContext);

    return (
        <Header className="flex justify-between bg-[#FFFFFF]" {...rest}>
            {children}
            <Flex align="center" className="cursor-pointer" onClick={onClick}>
                <span className="font-bold text-primary">Olá {user?.name}</span>
                <Image preview={false} src="/logo.png" height={60} width={60}/>
            </Flex>
        </Header>
    );
}