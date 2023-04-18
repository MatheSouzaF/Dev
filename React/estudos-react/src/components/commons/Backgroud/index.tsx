import { Box, Flex, Image, Link } from "@chakra-ui/react"

export function Backgroud() {
    return (
        <Flex maxW={"1280px"} margin={"0 auto"} position={"relative"} flexDirection={"column"}>
            <Image src="public/banner.jpg"  ></Image>
            <Flex gap={"201px"} align={"center"} p={"30px"} position={"absolute"}>
                <Image src='public/blue.jpg' ></Image>
                <Flex gap={"20px"} color={"white"}>
                    <Link  href='https://chakra-ui.com' isExternal className="header-text">ENGIE</Link>
                    <Link  href='https://chakra-ui.com' isExternal className="header-text">Soluções</Link>
                    <Link  href='https://chakra-ui.com' isExternal className="header-text">Sustentabilidade</Link>
                    <Link  href='https://chakra-ui.com' isExternal className="header-text">Investidores</Link>
                    <Link  href='https://chakra-ui.com' isExternal className="header-text">Carreira</Link>
                    <Link  href='https://chakra-ui.com' isExternal className="header-text">Contato</Link>
                </Flex>
            </Flex>
                <Box bg='white' w='100%' maxW={"1136px"}  color='white'  m={"0 auto"} left={"0px"} right={"0px"} h='130px' position={"absolute"} bottom={"0px"}></Box>
        </Flex>
    )
}