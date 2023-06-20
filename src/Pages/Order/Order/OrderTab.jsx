import React, { useState } from 'react';
import FoodCards from '../../../Components/FoodCards/FoodCards';

const itemsPerPage = 6;
const OrderTab = ({items}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const displayedItems = items.slice(startIndex, endIndex);
    return (
        <div>
        <div className='grid grid-cols-3'>
            {displayedItems.map((item) => (
                <FoodCards item={item}/>
            ))}
        </div>
        <div className='pagination flex'>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
               <div className='bg-black text-white w-6 p-2 m-2 rounded'>
                 <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={currentPage === pageNumber ? 'active' : ''}
                >
                   {pageNumber}
                </button>
               </div>
            ))}
        </div>
    </div>
    );
};

export default OrderTab;