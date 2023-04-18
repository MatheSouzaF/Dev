import { Flex, Text } from "@chakra-ui/react";

export const TitleDescription = ({nome, idade}) =>{

    return (
        <Flex flexDirection={"column"}>
            <Text>{nome}</Text>
            <Text>{idade}</Text>
        </Flex>
    )
}

export default TitleDescription