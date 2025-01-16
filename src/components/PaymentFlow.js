import React, { useState } from "react";
// import DropdownTable from "./DropdownTable";
import "../App.css";

const PaymentFlow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1); // Step 1: Form, Step 2: Payment Method
  const [selectedPayment, setSelectedPayment] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setStep(1); // Reset to initial form step
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2); // Go to payment method selection
  };

  const handlePaymentMethod = (method) => {
    setSelectedPayment(method);
    alert(`You selected: ${method}`);
  };

  return (
    <div>
      {/* Button to open modal */}
      <button onClick={toggleModal}>Buy Online Now</button>
      {/* <DropdownTable toggleModal={toggleModal} /> */}
      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={toggleModal}>
              ×
            </button>
            {step === 1 && (
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Network</label>
                  <select>
                    <option value="">Choose your Network</option>
                    <option value="MTN">MTN</option>
                    <option value="Glo">Glo</option>
                    <option value="Airtel">Airtel</option>
                    <option value="9mobile">9mobile</option>
                  </select>
                </div>
                <div>
                  <label>Data Plan</label>
                  <select>
                    <option value="">Choose your plan</option>
                    <option value="1GB">1GB</option>
                    <option value="2GB">2GB</option>
                    <option value="5GB">5GB</option>
                  </select>
                </div>
                <div>
                  <label>Mobile Number</label>
                  <input type="text" placeholder="Enter Phone Number" />
                </div>
                <div>
                  <label>Amount</label>
                  <input type="text" value="N160 (Fixed amount)" readOnly />
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    Want to be sent renewal reminders?
                  </label>
                </div>
                <button type="submit">Submit</button>
              </form>
            )}

            {step === 2 && (
              <div>
                <button className="close-btn" onClick={toggleModal}>
                  ×
                </button>
                <h3>Choose a Payment Method</h3>
                <div className="payment-method">
                  <button
                    className={`payment-option ${
                      selectedPayment === "card" ? "active" : ""
                    }`}
                    onClick={() => handlePaymentMethod("card")}
                  >
                    Pay with Card
                  </button>
                  <button
                    className={`payment-option ${
                      selectedPayment === "transfer" ? "active" : ""
                    }`}
                    onClick={() => handlePaymentMethod("transfer")}
                  >
                    Pay with Transfer
                  </button>
                </div>
                {selectedPayment === "card" && (
                  <div className="card-details">
                    <img
                      src="your-image-path/logo.png"
                      alt="Payment Logo"
                      className="payment-logo"
                    />
                    <p>080 1234 5678</p>
                    <p>Pay NGN 240.00</p>
                    <div>
                      <label>Card Number</label>
                      <input type="text" placeholder="xxxx xxxx xxxx xxxx" />
                    </div>
                    <div>
                      <label>Card Expiry</label>
                      <input type="text" placeholder="mm/yyyy" />
                    </div>
                    <div>
                      <label>CVV</label>
                      <input type="text" placeholder="123" />
                    </div>
                    <button className="pay-btn">Pay NGN 240.00</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentFlow;
