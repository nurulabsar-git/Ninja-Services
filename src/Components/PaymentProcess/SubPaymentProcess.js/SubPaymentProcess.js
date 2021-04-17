import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';


const SubPaymentProcess = () => {

    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const [paymentError, setPaymentError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        
        return;
      }
  
      const cardElement = elements.getElement(CardElement);
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (error) {
        setPaymentError(error.message);
        setPaymentSuccess(null);
        console.log('[error]', error);
      } else {
        setPaymentSuccess(paymentMethod?.id);
        setPaymentError(null);
        console.log('[PaymentMethod]', paymentMethod);
      }
    };
  


    return (
        <form onSubmit={handleSubmit}>
        <CardElement />
        <button style={{marginTop: '10px', width: '20%', borderRadius: '8px'}} type="submit" disabled={!stripe}>
          Pay
        </button>
        {
            paymentError && <p style={{color: 'red'}}>{paymentError}</p>
        }

        {
            paymentSuccess && <p style={{color: 'green', paddingTop: '10px', textAlign: 'center'}}>Your payment Successfully done.</p>
        }
      </form>
    );
};

export default SubPaymentProcess;