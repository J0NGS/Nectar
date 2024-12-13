import { Flex, Image } from "antd";
import { BasicProps, Header } from "antd/es/layout/layout";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
export const HeaderLayout: React.FC<BasicProps & React.RefAttributes<HTMLElement>> = ({...rest}) => {
    const { user } = useContext(AuthContext);

    return (
        <Header className="flex justify-end bg-[#FFFFFF]" {...rest}>
            <Flex align="center">
                <span className="font-bold text-primary">Olá {user?.name}</span>
                <Image preview={false} src="/logo.png" height={60} width={60}/>
            </Flex>
        </Header>
    );
}