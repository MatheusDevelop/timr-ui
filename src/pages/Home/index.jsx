import { Box, Flex, Grid, GridItem, Text, useToken } from "@chakra-ui/react";
import Timer from "../../components/Timer";
import { DashboardAreaChart } from "../../components/DashboardAreaChart";
import { DashboardLineChart } from "../../components/DashboardLineChart";

function Home() {
    const ItemWrapper = (props) => (
        // eslint-disable-next-line react/prop-types
        <GridItem {...props} className={props.filled ? "dashboardCard dcardfi" : "dashboardCard"} borderRadius={"lg"} p={5} textAlign={"start"} color="white" />
    )

    return (
        <>
            <Timer />
            <Box bgColor="#636060a4" width="100%" height="1px" mt={5} mb={5}>

            </Box>
            <Grid
                flex={1}
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={5}
            >
                <ItemWrapper rowSpan={1} colSpan={1} filled position="relative" id={'productiveTime'}>
                    <Text fontSize="md" opacity={.6}>
                        Productive time
                    </Text>
                    <Text fontSize="3xl" mt={1}>
                        12.4h
                    </Text>
                    <DashboardAreaChart
                        id={"productiveTime"}
                        data={[{ name: "x", value: 1 }, { name: "y", value: 4 }, { name: "z", value: 2 }, { name: "z", value: 5 }]}
                    />
                </ItemWrapper>
                <ItemWrapper rowSpan={1} colSpan={1} filled id={'availableTime'}>
                    <Text fontSize="md" opacity={.6}>
                        Available time
                    </Text>
                    <Text fontSize="3xl" mt={1}>
                        12.4h
                    </Text>
                    <DashboardAreaChart
                        id={"availableTime"}
                        data={[{ name: "x", value: 1 }, { name: "y", value: 1 }, { name: "z", value: 3 }, { name: "z", value: 1 }]}
                    />
                </ItemWrapper>
                <ItemWrapper rowSpan={2} colSpan={2}>
                    <Flex
                        as={"span"}
                        border={"1px solid #414141 "}
                        p={2}
                        width="min-content"
                        borderRadius={"md"}
                        alignItems={"center"}
                        cursor="pointer"
                        _hover={{
                            background: "#41414160",
                        }}>
                        <Text fontSize="sm" mr={1}>
                            Today
                        </Text>
                        <span className="material-symbols-outlined" style={{ fontSize: 24 }}>
                            expand_more
                        </span>
                    </Flex>
                </ItemWrapper>
                <ItemWrapper rowSpan={2} colSpan={2} filled>
                    <Text fontSize="md" opacity={.6} mb={5}>
                        Time on projects
                    </Text>
                    <Box ml={-10}>

                        <DashboardLineChart
                            height={350}
                            id={"timeOnProjects"}
                            lines={[{ id: "value", color: "#F6AD55" }, { id: "1", color: '#68D391' }, { id: "2", color: '#63B3ED' },]}
                            data={[
                                { name: "Day 1", value: 1, '1': 2, '2': 2 },
                                { name: "Day 2", value: 1, '1': 1, '2': 1 },
                                { name: "Day 3", value: 3, '1': 3, '2': 0 }
                                , { name: "Day 4", value: 1, '1': 4, '2': 3 }
                            ]}
                        />
                    </Box>

                </ItemWrapper>
                <ItemWrapper rowSpan={1} colSpan={2}>
                    <Text fontSize="md" opacity={.6}>
                        Last time entry
                    </Text>
                </ItemWrapper>
            </Grid>
        </>
    )
}

export default Home;


