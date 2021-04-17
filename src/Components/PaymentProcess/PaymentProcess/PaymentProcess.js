import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SubPaymentProcess from '../SubPaymentProcess.js/SubPaymentProcess';



const stripePromise = loadStripe('pk_test_51IeIDmBUeyBqKrDZK6huqKrzEvnG2e6AJyXyGkT93t3qBkvzPbXQg1NQnNMACCCy39RwDkU9EZiV6WYFCWLDAdVc00FzUpXADg');

const PaymentProcess = () => {
    return (
        <Elements stripe={stripePromise}>
        <SubPaymentProcess></SubPaymentProcess>

</Elements>
    );
};

export default PaymentProcess;