import { Flex, Image } from "antd";
import { BasicProps, Header } from "antd/es/layout/layout";

export const HeaderLayout: React.FC<BasicProps & React.RefAttributes<HTMLElement>> = () => {
    return (
        <Header className="flex items-center justify-between">
            <span className="font-extrabold text-xl">NECTAR</span>
            <Flex align="center">
                <span className="font-bold">Olá Produtor! </span>
                <Image preview={false} src="/logo.png" height={60} width={60}/>
            </Flex>
        </Header>
    );
}