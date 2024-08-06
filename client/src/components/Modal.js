import React from 'react';


const Modal = ({ isopen, handleClose, children ,type}) => {
  return (
    <div  className={`modal fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center transition-opacity duration-300 ${isopen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={handleClose}>
      <div className="modal-content bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3" onClick={e => 
        e.stopPropagation()}>
        <div className="modal-header flex justify-between items-center mb-4">
          <h4 className="modal-title text-xl font-semibold">Add {type}</h4>
          <button className="close-button text-black text-2xl font-bold" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;