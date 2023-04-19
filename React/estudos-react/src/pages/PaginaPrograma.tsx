import { Flex, Heading } from "@chakra-ui/react"
import TitleDescription from "../components/TitleDescription"
import { Backgroud } from "../components/commons/Backgroud"
import Cards from "../components/Cards"

const PaginaPrograma = () => {
  return (
    <>
      <Backgroud />
      <Flex flexDirection={"column"} p={"0 250px"} background={"white"}>
        <TitleDescription />
      </Flex>

      <Flex bg="#F5F5F5" alignItems={"center"} flexDirection={"column"} p={"64px 0 96px"} >
        <Heading bgGradient="linear-gradient(135deg, #00BCFD 0%, #23D2B5 100%);" bgClip='text' fontSize={"46px"} lineHeight={"52px"} pb="32px">P&D em números</Heading>

        <Flex gap="29px">
          <Cards  
            subTitle="Orçamento Anual Aplicado em Projetos"
            title="R$ 21 milhões"
            description="em 2018"
          />
           <Cards  
            subTitle="Mais de"
            title="190 projetos"
            description="realizados"
          />
           <Cards  
            subTitle="Investimento de"
            title="R$ 184 milhões"
            description="aplicados em projetos desde 1998"
          />
        </Flex>
      </Flex>

    </>
  )
}


export default PaginaPrograma