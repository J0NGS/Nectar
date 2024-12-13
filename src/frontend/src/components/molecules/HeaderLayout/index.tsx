import { Flex, Image } from "antd";
import { BasicProps, Header } from "antd/es/layout/layout";

export const HeaderLayout: React.FC<BasicProps & React.RefAttributes<HTMLElement>> = ({...rest}) => {
    return (
        <Header className="flex justify-end bg-[#FFFFFF]" {...rest}>
            <Flex align="center">
                <span className="font-bold text-primary">Olá Produtor! </span>
                <Image preview={false} src="/logo.png" height={60} width={60}/>
            </Flex>
        </Header>
    );
}