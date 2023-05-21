import { Card, Tag, TagLabel, Text } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import React, { useEffect } from 'react';
import { Line, YAxis, XAxis, CartesianAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area, Tooltip } from 'recharts';
export function DashboardAreaChart({ data, id, height }) {
    return (
        <ResponsiveContainer width={"100%"} height={height ?? 85} >
            <AreaChart data={data} >
                <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
                <Area
                    id={id}
                    type="monotone"
                    key={"chartX"}
                    dot={{ stroke: 'white', fill: "#ffffff" }}
                    strokeWidth={2}
                    isAnimationActive={true}
                    fill="#FFFFFF20"
                    dataKey="value" stroke="white" />
            </AreaChart >
        </ResponsiveContainer>
    )
}
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <Tag size="md" bgColor="white">
                <TagLabel color="blackAlpha.900" fontWeight={400}>{`Day ${label + 1} `}<span style={{ fontWeight: 500 }}>{payload[0].value}h</span></TagLabel>
            </Tag>
        );
    }

    return null;
};