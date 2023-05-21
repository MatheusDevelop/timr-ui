import { Card, Tag, TagLabel, Text } from '@chakra-ui/react';
import React from 'react';
import { Line, ResponsiveContainer, Tooltip, LineChart, XAxis, CartesianGrid, YAxis } from 'recharts';
export function DashboardLineChart({ data, id, height, lines }) {
    return (
        <ResponsiveContainer width={"100%"} height={height ?? 85} >
            <LineChart data={data} >
                <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
                <CartesianGrid strokeOpacity={.3} strokeDasharray="2" vertical={false} />
                <YAxis strokeOpacity={0} tick={p => <CustomTickY {...p} />} />
                <XAxis strokeOpacity={0} dataKey="name" tick={p => <CustomTickX {...p} />} interval={0} />
                {
                    lines.map(l => (
                        <Line
                            id={l.id}
                            type="monotone"
                            key={l.id}
                            dot={{ stroke: l.color, fill: l.color }}
                            strokeWidth={2}
                            isAnimationActive={true}
                            dataKey={l.id} stroke={l.color} />
                    ))
                }
            </LineChart >
        </ResponsiveContainer>
    )
}
const CustomTickY = ({ payload, x, y }) => (
    <g transform={`translate(${x},${y - 15})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" style={{ fontSize: 12, opacity: .9 }}>
            {payload.value}h
        </text>
    </g>
)
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
const Months = ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Ago", "Sep", "Out", "Nov", "Dec"]
const CustomTickX = ({ payload, x, y }) => (
    <g transform={`translate(${x},${y + 10})`}>
        <text x={0} y={0} textAnchor="end" fill="#ffffff" style={{ fontSize: 12, opacity: .9 }}>
            {payload.value}
        </text>
    </g>
)