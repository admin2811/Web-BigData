import React from 'react';
import Plot from 'react-plotly.js';

const KMeansPlot = ({ xScaled, yClusters }) => {
    const data = [];
    const colors = ['blue', 'orange', 'green', '#D12B60', 'purple'];

    // Tạo dữ liệu cho từng cụm
    for (let i = 0; i < 5; i++) {
        const clusterData = xScaled.filter((_, index) => yClusters[index] === i);
        data.push({
            x: clusterData.map(point => point[0]),
            y: clusterData.map(point => point[1]),
            mode: 'markers',
            type: 'scatter',
            name: `Cluster ${i}`,
            marker: { color: colors[i], size: 10 },
        });
    }

    return (
        <Plot
            data={data}
            layout={{
                title: 'KMeans Clustering',
                xaxis: { title: 'Product ID (scaled)' },
                yaxis: { title: 'Avg Add to Cart Order (scaled)' },
            }}
        />
    );
};

export default KMeansPlot;
