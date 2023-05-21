import { Flex } from "@chakra-ui/react";
import Sidebar from "../Sidebar";
import Home from "../../pages/Home";

function Layout() {
    return (
        <Flex flex={1}>
            <Sidebar />
            <Flex flex={1} flexDir={"column"} p={5}>
                <Home />
            </Flex>
        </Flex>
    )
}

export default Layout;