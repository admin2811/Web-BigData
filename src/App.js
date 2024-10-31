import React from 'react';
import { Route, Routes , Swit} from 'react-router-dom';
import SideBar from './common/SideBar';
import OverViewPage from './pages/OverViewPage';
import KmeanPage from './pages/KmeanPage';
import KMeanMapReduce from './pages/KMeanMapReduce';
function App() {
  return (
    <div className='flex h-screen bg-white text-gray-100 overflow-hidden'>
        <SideBar/>
        <Routes>
            <Route path='/' element={<OverViewPage/>}/>
            <Route path='/kmeans' element={<KmeanPage />}/>
            <Route path='/mapreduce' element={<KMeanMapReduce/>}/>
        </Routes>
    </div>
  );
}

export default App;
