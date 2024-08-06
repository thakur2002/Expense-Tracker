import React, {useState}  from 'react'
import TransactionList  from './TransactionList'
import TransactionForm from './transactionform';
import Modal from './Modal';

export default function Maincontent({type}){
    const [isshow,setisshow]=useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function openModal(){
      setModalIsOpen(true);
      setisshow(false);
    }
  
    function closeModal(){
      setModalIsOpen(false);
      setisshow(true);
    }
  return (
    <>
     <h3 className='text-2xl font-semibold my-4'>
      {type} Transactions
    </h3>
    {isshow && <button className="bg-blue-500 hover:bg-blue-800 active:bg-blue-300 text-white px-4 py-2 rounded mb-4" onClick={openModal}>Add {type}</button>}
    <TransactionList typeoftransaction={type}> </TransactionList>
   
     <Modal
        isopen={modalIsOpen}
        handleClose={closeModal}
        type={type}
      >
    <TransactionForm closeModal={closeModal} type={type} />
      </Modal>
    </>


   
  );
}