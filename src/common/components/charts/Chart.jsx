import React, { Component } from 'react'
import {
    LineChart, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Brush, Legend,
    ReferenceArea, ReferenceLine, ReferenceDot, ResponsiveContainer,
    LabelList, Label, Line
} from 'recharts';

const data = [
    { name: 'Domingo', uv: 2300, pv: 4300, amt: 2100, time: 18 },
    { name: 'Segunda', uv: 4000, pv: 2400, amt: 2400, time: 1 },
    { name: 'Terça', uv: 3000, pv: 1398, amt: 2210, time: 3 },
    { name: 'Quarta', uv: 2000, pv: 9800, amt: 2290, time: 9 },
    { name: 'Quinta', uv: 2780, pv: 3908, amt: 2000, time: 10 },
    { name: 'Sexta', uv: 2500, pv: 4800, amt: 2181, time: 12 },
    { name: 'Sábado', uv: 1220, pv: 3800, amt: 2500, time: 16 },
];

class Chart extends Component {
    render() {
        return (
            // <div>

            //     <LineChart
            //         style={{ textAlign: 'center' }}
            //         width={this.props.width}
            //         height={200}
            //         data={data}
            //         margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            //     >
            //         <XAxis dataKey="name" />
            //         <Tooltip />
            //         <CartesianGrid stroke="#f5f5f5" />
            //         <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
            //         <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
            //         <Line type="monotone" dataKey="amt" stroke="#387f38" yAxisId={1} />
            //     </LineChart>
            // </div>

            <AreaChart width={this.props.width} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient> */}
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>

        )
    }
}

export default Chart
