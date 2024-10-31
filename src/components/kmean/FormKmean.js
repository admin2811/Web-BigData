import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CLoadingButton } from '@coreui/react-pro';
import '@coreui/coreui-pro/dist/css/coreui.min.css';

const FormKmean = () => {
  const [file, setFile] = useState(null);
  const [cluster, setCluster] = useState('');
  const [thresh, setThresh] = useState('');
  const [lines, setLines] = useState('');
  const [maxLoop, setMaxLoop] = useState('');
  const [loading, setLoading] = useState(false); // Thêm state để theo dõi trạng thái loading

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      toast.error('Please select a file before submitting');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('cluster', cluster);
    formData.append('thresh', thresh);
    formData.append('lines', lines);
    formData.append('maxLoop', maxLoop);

    setLoading(true); // Bắt đầu loading
    try {
      const response = await fetch('http://localhost:8080/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        toast.success('Hãy check trong thư mục C:/output của bạn');
      } else {
        toast.error(data.message || 'An error occurred during processing');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('An error occurred while uploading the file');
    } finally {
      setLoading(false); // Dừng loading bất kể thành công hay thất bại
    }
  };

  return (
    <div>
      <div className="w-full max-w-md bg-white rounded-xl shadow-md py-8 px-8 mx-auto">
        <h2 className="text-[28px] font-bold text-black mb-6 text-center">Add Property</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <input
              placeholder="Input file"
              className="bg-gray-700 text-white border-0 rounded-md p-2 w-full focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150"
              type="file"
              onChange={handleFileChange}
            />
            {file && (
              <div className="text-white mt-2">
                <p className='text-black'>{file.name}</p>
              </div>
            )}
          </div>
          <div className="flex space-x-4 mb-4">
            <input
              placeholder="Cluster"
              className="bg-gray-700 text-white border-0 rounded-md p-2 w-full focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150"
              type="number"
              value={cluster}
              onChange={(e) => setCluster(e.target.value)}
            />
            <input
              placeholder="Thresh"
              className="bg-gray-700 text-white border-0 rounded-md p-2 w-full focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150"
              type="number"
              value={thresh}
              onChange={(e) => setThresh(e.target.value)}
            />
          </div>
          <div className="flex space-x-4 mb-4">
            <input
              placeholder="Lines"
              className="bg-gray-700 text-white border-0 rounded-md p-2 w-full focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150"
              type="number"
              value={lines}
              onChange={(e) => setLines(e.target.value)}
            />
            <input
              placeholder="Max Loop"
              className="bg-gray-700 text-white border-0 rounded-md p-2 w-full focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150"
              type="number"
              value={maxLoop}
              onChange={(e) => setMaxLoop(e.target.value)}
            />
          </div>
          <CLoadingButton color="info" type="submit" loading={loading} className='text-white'>
            Calculate
          </CLoadingButton>
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default FormKmean;
