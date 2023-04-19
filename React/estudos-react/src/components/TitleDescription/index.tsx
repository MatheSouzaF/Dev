import { Flex, Heading, Text } from "@chakra-ui/react";

export function TitleDescription() {

    return (
        <Flex flexDirection={"column"} pb="130px" >
            <Heading textAlign={"center"} transform={"translateY(-72px)"}>P&D</Heading>
            <Flex flexDirection={"column"} gap={"30"}>
                <Text>O modelo de Pesquisa, Desenvolvimento (P&D) adotado pela ENGIE busca contribuir para o desenvolvimento sustentável da Companhia, por meio de projetos voltados à eficiência operacional e à criação de novos produtos, serviços ou negócios. Além disso, reitera nosso compromisso em impulsionar o crescimento científico e tecnológico do país, alinhado aos interesses estratégicos do setor.</Text>
                <Text>
Desde 1998, a Companhia já investiu cerca de R$ 220 milhões, em mais de 190 projetos realizados de forma colaborativa, envolvendo 40 organizações, incluindo universidades, centros de pesquisa e outras empresas. Assim, fortalecemos nossa cultura de inovação aberta, potencializando a sinergia com outros agentes do ecossistema em que estamos inseridos.</Text>
            </Flex>
        </Flex>
    )
}

export default TitleDescription