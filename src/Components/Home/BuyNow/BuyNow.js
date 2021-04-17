import React from 'react';
import Modal from 'react-modal';
import PaymentProcess from '../../PaymentProcess/PaymentProcess/PaymentProcess';


const customStyles = {
  content : {
    top                   : '35%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    padding               : '2px 8px 8px 8px',
    height                : '55vh',
    width                 : '52%',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

const BuyNow = ({modalIsOpen, closeModal, productInfo, clothDetails}) => {
  //  console.log(productInfo)
  
    return (
        <div>
            
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <button onClick={closeModal} className="rounded">Close</button>
          <section className="p-2">
          <div style={{textAlign: 'justify'}}>
            <h5>Name: $<span>{productInfo?.name?.name} {clothDetails?.name?.name}</span></h5>
            <h6>Total Price: $<span>{productInfo?.name?.price} {clothDetails?.name?.price}</span></h6>
            
          </div>
          <div>
           <h4>Please Pay Your Payment</h4>
           <PaymentProcess></PaymentProcess>
        
          </div>
          </section>
        </Modal>
        </div>
    );
};

export default BuyNow;