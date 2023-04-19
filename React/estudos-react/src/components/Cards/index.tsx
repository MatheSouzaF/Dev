import { Card, CardBody, Heading, Text } from "@chakra-ui/react"

export const Cards = ({ subTitle, title, description }) => {
    return (

        <Card w={"357px"} h="218px" className="border">
            <CardBody textAlign={"center"} pt="62px">
                <Text color="#424242" >{subTitle}</Text>
                <Heading bgGradient="linear-gradient(135deg, #00BCFD 0%, #23D2B5 100%);" bgClip='text'>{title}</Heading>
                <Text color="#212121" opacity="0.5">{description}</Text>
            </CardBody>
        </Card>

    )
}

export default Cards