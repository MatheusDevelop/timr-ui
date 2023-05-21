import { Box, Flex, Square, Text } from "@chakra-ui/react";

export default function Timer() {
    return <Flex
        borderRadius={"lg"}
        className="timerbar"
        alignItems={"center"}
        width={"290px"}
        justifyContent={"space-between"}
        p={3}
        color="white"
    >
        <Flex as={Square}
            _hover={{
                background: "whiteAlpha.800"
            }}
            cursor={"pointer"}
            alignItems={"center"} justifyContent={"center"} style={{ width: 40, height: 40 }} background={"white"} borderRadius={"md"}>
            <span className="material-symbols-outlined" style={{ fontSize: 28, color: "#1e1e1e" }}>
                play_arrow
            </span>
        </Flex>
        <Text fontSize={"sm"} opacity=".6">
            At
        </Text>
        <Flex cursor="pointer" alignItems="center"
            px={3}
            _hover={{
                background: "#414141",
            }}
            borderRadius={"md"}
        >
            <Square style={{ width: 10, height: 10 }} borderRadius={"sm"} background={"#F6E05E"} mr={2} />
            <Text fontSize={"sm"} fontWeight={"500"}>
                John doe work
            </Text>
            <Box className="material-symbols-outlined" ml={2}>
                expand_more
            </Box>
        </Flex>
    </Flex>;
}
