import React, { useState } from "react";

const PaymentFlow = ({ amount, onTransactionSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState(""); // 'card' or 'transfer'

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  const handleProcessPayment = () => {
    setTimeout(() => {
      alert("Transaction Successful!");
      setPaymentMethod(""); // Reset payment method
      onTransactionSuccess(); // Notify parent component
    }, 2000);
  };

  return (
    <div className="payment-modal">
      <h3>Choose a Payment Method</h3>
      <button onClick={() => handlePaymentMethod("card")}>Pay with Card</button>
      <button onClick={() => handlePaymentMethod("transfer")}>
        Pay with Transfer
      </button>

      {paymentMethod && (
        <div className="payment-details">
          {paymentMethod === "card" ? (
            <div>
              <h4>Enter Card Details</h4>
              <input type="text" placeholder="Card Number" />
              <input type="text" placeholder="Card Expiry" />
              <input type="text" placeholder="CVV" />
              <button onClick={handleProcessPayment}>Pay NGN {amount}</button>
            </div>
          ) : (
            <div>
              <h4>Transfer Details</h4>
              <p>BANK NAME: Paystack-Titan</p>
              <p>ACCOUNT NUMBER: 0012345432</p>
              <p>AMOUNT: NGN {amount}</p>
              <button onClick={handleProcessPayment}>
                I've sent the money
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentFlow;
