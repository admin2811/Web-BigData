  import React, { useEffect, useState } from 'react'
  import Header from '../common/Header'
  import ScatterPlot from '../components/kmean/ScatterPlot';
import axios from 'axios';
import FormKmean from '../components/kmean/FormKmean';
  const KmeanPage = () => {
    return (
      <div className='flex-1 overflow-auto relative z-10'>
        <Header title='Kmean' />
        <div id="alert-additional-content-4" className="m-10 p-4 mb-4 text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-700 dark:text-yellow-300 dark:border-yellow-800" role="alert">
            <div className="flex items-center">
              <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
              </svg>
              <span className="sr-only">Info</span>
              <h3 className="text-lg font-medium">This is a warning alert</h3>
            </div>
            <div className="mt-2 mb-4 text-sm">
              Hãy tiền xử lý cho file của bạn trước khi thực hiện tính toán
            </div>
            <div className="flex">
              <button type="button" className="text-white bg-yellow-800 hover:bg-yellow-900 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-yellow-300 dark:text-gray-800 dark:hover:bg-yellow-400 dark:focus:ring-yellow-800">
                <svg className="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                  <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                </svg>
                <a href='https://scikit-learn.org/1.5/modules/preprocessing.html' target='_blank' rel="noopener noreferrer">Cách tiền xử lý</a>
              </button>
              <button type="button" className="text-yellow-800 bg-transparent border border-yellow-800 hover:bg-yellow-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-gray-800 dark:focus:ring-yellow-800" data-dismiss-target="#alert-additional-content-4" aria-label="Close">
                Dismiss
              </button>
            </div>
        </div>
        <div>
          <FormKmean />
        </div>
      </div>  
    )
  }

  export default KmeanPage
