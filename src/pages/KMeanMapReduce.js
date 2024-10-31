import React, { useState, useEffect } from 'react';
import Header from '../common/Header';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';

const KMeanMapReduce = () => {
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);

  // Trạng thái cho các trường trục X, Y, Z
  const [xAttribute, setXAttribute] = useState('');
  const [yAttribute, setYAttribute] = useState('');
  const [zAttribute, setZAttribute] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const csvData = e.target.result;
        Papa.parse(csvData, {
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            setData(results.data);
          },
        });
      };
      reader.readAsText(file);
    }
  }, [file]);
 console.log(data);
  // Lấy dữ liệu cho các trục
  const x = data.map((item) => item[xAttribute]).filter((value) => !isNaN(value));
  const y = data.map((item) => item[yAttribute]).filter((value) => !isNaN(value));
  const z = data.map((item) => item[zAttribute]).filter((value) => !isNaN(value));

  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Biểu đồ' />
      <div className='flex flex-row justify-center p-10 gap-40'>
        <div className='p-10 max-w-md bg-slate-600 rounded-lg'>
          <h2 className='text-[28px] font-bold text-white mb-6 text-center'>Input File</h2>
          <form className="flex flex-col">
            <div className="flex flex-col mb-4">
              <input
                placeholder="Input file"
                className="bg-gray-700 text-white border-0 rounded-md p-2 w-full focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150"
                type="file"
                onChange={handleFileChange}
              />
            </div>
          </form>
        </div>

        <div className='p-10 max-w-md bg-slate-600 rounded-lg'>
          <h2 className='text-[28px] font-bold text-white mb-6 text-center'>Các trường cần vẽ</h2>
          <form className="flex flex-col">
            <div className="flex flex-col mb-4">
              <input
                placeholder="Trục X"
                className="bg-gray-700 text-white border-0 rounded-md p-2 w-full focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150"
                type="text"
                value={xAttribute}
                onChange={(e) => setXAttribute(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <input
                placeholder="Trục Y"
                className="bg-gray-700 text-white border-0 rounded-md p-2 w-full focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150"
                type="text"
                value={yAttribute}
                onChange={(e) => setYAttribute(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <input
                placeholder="Trục Z"
                className="bg-gray-700 text-white border-0 rounded-md p-2 w-full focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150"
                type="text"
                value={zAttribute}
                onChange={(e) => setZAttribute(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>

      <div className='flex flex-col items-center m-10 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'>
        <Plot
          className='w-full'
          style={{ width: '600px', height: '600px' }} // Thay đổi chiều cao và chiều rộng
          data={[
            {
              x: x,
              y: y,
              z: z,
              mode: 'markers',
              marker: {
                size: 12,
                color: z,
                colorscale: 'Viridis',
                showscale: true,
              },
              type: 'scatter3d',
            },
          ]}
          layout={{
            title: '3D Scatter Plot',
            scene: {
              xaxis: { title: xAttribute },
              yaxis: { title: yAttribute },
              zaxis: { title: zAttribute },
            },
          }}
        />
      </div>
    </div>
  );
};

export default KMeanMapReduce;
