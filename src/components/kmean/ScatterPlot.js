import React from 'react';
import Plot from 'react-plotly.js';

const ScatterPlot = ({ x, y, z, labels }) => {
    const data = [
        {
            x: x,
            y: y,
            z: z,
            mode: 'markers',
            marker: {
                color: labels,
                size: 10,
                line: {
                    color: 'black', 
                    width: 1
                }
            },
            type: 'scatter3d'
        }
    ];

    const layout = {
        scene: {
            xaxis: { title: 'Product_id -->' },
            yaxis: { title: 'Order_hour_of_day--->' },
            zaxis: { title: 'total_sold-->' }
        },
        margin: { l: 0, r: 0 },
        height: 800,
        width: 800
    };

    return (
        <Plot
            data={data}
            layout={layout}
            className='p-2 border border-gray-700 m-10 rounded-xl'
        />
    );
};

export default ScatterPlot;
