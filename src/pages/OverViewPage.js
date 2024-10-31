import React, { useState } from 'react'
import Header from '../common/Header'
import EblowChart from '../components/overview/EblowChart'
import axios from 'axios'
import { form } from 'framer-motion/client'

const OverViewPage = () => {
  const [file, setFile] = useState(null);
  const [cot1 , setCot1] = useState('');
  const [cot2, setCot2] = useState('');
  const [cot3, setCot3] = useState('');
  const [chartData, setChartData] = useState([]);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("cot1", cot1)
    formData.append("cot2", cot2)
    formData.append("cot3", cot3)
    try {
      const response = await axios.post("http://localhost:5000/api/elbow-data", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setChartData(response.data);
      console.log(response.data); // Xử lý dữ liệu nhận được từ Flask
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Overview' />
      <div className='m-10 flex flex-col justify-center items-center'>
        <div className='p-10 max-w-md bg-slate-600 rounded-lg'>
          <h2 className='text-[28px] font-bold text-white mb-6 text-center'>Input File</h2>
          <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col mb-4">
              <input
                placeholder="Input file"
                className="bg-gray-700 text-white border-0 rounded-md p-2 w-full focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150"
                type="file"
                onChange={handleFileChange}
              />
            </div>
            <div className="flex flex-col mb-4">
              <input
                placeholder="Cột 1"
                className="bg-gray-700 text-white border-0 rounded-md p-2 w-full focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150"
                type="text"
                value={cot1}
                onChange={(e) => setCot1(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <input
                placeholder="Cột 2"
                className="bg-gray-700 text-white border-0 rounded-md p-2 w-full focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150"
                type="text"
                value={cot2}
                onChange={(e) => setCot2(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <input
                placeholder="Cột 3"
                className="bg-gray-700 text-white border-0 rounded-md p-2 w-full focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150"
                type="text"
                value={cot3}
                onChange={(e) => setCot3(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={handleFileUpload}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Upload and Process File
            </button>
          </form>
        </div>
      </div>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <EblowChart data={chartData} className='mb-10' />
      </main>
    </div>
  )
}

export default OverViewPage
