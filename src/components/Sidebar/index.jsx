import { Box, Flex, Square, Text } from "@chakra-ui/react";
import Logo from '../../assets/Logo.svg'
import { useState } from "react";
function Sidebar() {
    const menuItems = [
        { name: 'Home', icon: 'home' },
        { name: 'Time entries', icon: 'history' },
    ]
    const projects = [
        { name: 'John doe work', color: "#F6E05E" }
    ]
    const [active, setActive] = useState('Home');
    return (
        <Flex flexDir={"column"} alignItems={"center"} borderRight={"1px solid #414141"} width={220} pt={10}
            backdropFilter={"blur(2px)"}
            backgroundColor={"#1e1e1e20"}
        >
            <img src={Logo} style={{ width: 120 }} />
            <Box mt={10} pt={5}>
                {menuItems.map(i => (
                    <Flex key={i.name}
                        alignItems="center"
                        justifyContent="space-between"
                        onClick={() => setActive(i.name)}
                        _hover={{
                            background: "#414141",
                        }}
                        sx={{
                            background: active === i.name ? '#414141' : 'transparent',
                            padding: '10px',
                            width: 150,
                            opacity: active === i.name ? 1 : .5,
                            border: active === i.name ? '1px solid #636060' : '0px',
                            mb: 3,
                            cursor: "pointer",
                        }} borderRadius={"lg"} color="white" fontWeight={300}>
                        <span className="material-symbols-outlined" style={{ width: 40 }}>
                            {i.icon}
                        </span>
                        <Text fontSize="sm" style={{ width: 95, textAlign: "start" }}>
                            {i.name}
                        </Text>

                    </Flex>
                ))}
            </Box>
            <Box style={{ width: '100%', height: .5, background: "#414141" }} mt={5} color="white" textAlign={"start"} px={10}>
                <Text style={{ fontFamily: "'Raleway',sans-serif", fontSize: 12 }} mt={8} opacity={.4}>
                    PROJECTS
                </Text>
                <Box pt={5}>
                    {projects.map(i => (
                        <Flex key={i.name}
                            alignItems="center"
                            justifyContent="space-between"
                            _hover={{
                                background: "#414141",
                            }}
                            sx={{
                                width: 150,
                                mb: 3,
                                px: 2, py: 1,
                                transition: ".2s opacity ease-in",
                                cursor: "pointer",
                            }} borderRadius={"md"} color="white" fontWeight={300}>
                            <Square bgColor={i.color} style={{ width: 10, height: 10 }} borderRadius={"sm"}>
                                {i.icon}
                            </Square>
                            <Text fontSize="sm" style={{
                                textAlign: "start",
                                opacity: active === i.name ? 1 : .5,

                            }}>
                                {i.name}
                            </Text>
                        </Flex>
                    ))}
                </Box>
            </Box>
        </Flex>
    )
}

export default Sidebar;