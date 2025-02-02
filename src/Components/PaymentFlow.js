import React, { useState, useEffect } from "react";
import image from "../Images/image.png";
import checkbox from "../Images/checkbox.png";
import closebtn from "../Images/xBtn.png";
import DropdownTable from "./DropdownTable";
import "../App.css";

const PaymentFlow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1); // Step 1: Form, Step 2: Payment Method
  const [selectedPayment, setSelectedPayment] = useState("");
  const [plan, setPlan] = useState("");
  const [network, setNetwork] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [paymentMethod, setPaymentMethod] = useState("");
  // const [amount] = useState("N160 (Fixed amount)");
  const [amount, setAmount] = useState("");
  const [countdown, setCountdown] = useState(30 * 60);
  const pricing = {
    mtn: {
      "500MB": 146,
      "1GB": 289,
      "2GB": 578,
      "3GB": 866,
      "5GB": 1443,
      "10GB": 2886,
    },
    airtel: {
      "500MB": 161,
      "1GB": 308,
      "2GB": 615,
      "5GB": 1538,
      "10GB": 3075,
    },
    glo: {
      "500MB": 140,
      "1GB": 278,
      "2GB": 555,
      "3GB": 833,
      "5GB": 1388,
      "10GB": 2775,
    },
    "9mobile": {
      "500MB": 83,
      "1GB": 150,
      "2GB": 300,
      "3GB": 450,
      "5GB": 750,
      "10GB": 1499,
    },
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setStep(1); // Reset to initial form step
  };
  const handleNetworkChange = (e) => {
    setNetwork(e.target.value);
    setPlan(""); // Reset plan when network changes
    setAmount(""); // Reset amount when network changes
  };

  const handlePlanChange = (e) => {
    const selectedPlan = e.target.value;
    setPlan(selectedPlan);
    // Update amount if network and plan are selected
    if (network && pricing[network] && pricing[network][selectedPlan]) {
      setAmount(`#${pricing[network][selectedPlan]}`);
    } else {
      setAmount(""); // Reset amount if no valid price is found
    }
  };

  const handleSubmit = () => {
    if (!network || !plan || !phoneNumber) {
      alert("Please fill out all required fields!");
      return;
    }
    alert(`Data Plan Purchased: ${network} - ${plan} for ${amount}`);
    setStep(2); // Go to payment method selection
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);
  const isLessThanOneMinute = countdown < 60;
  // ProcesspaymentMethod
  const handlePaymentMethod = (method) => {
    setSelectedPayment(method);
    // alert(`You selected: ${method}`);
  };
  const handleProcessPayment = async () => {
    try {
      // Example API call to payment gateway (Commented out for now)
      // const response = await fetch("/api/pay", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ method: paymentMethod, amount }),
      // });
      // const result = await response.json();

      // Simulated success for now
      setStep(3); // Move to step 3 for "Transaction Successful"
      // alert(`Transaction Successful using ${paymentMethod}!`);
      // setPaymentMethod("");
      // onPaymentSuccess();
    } catch (error) {
      alert("An error occurred during payment processing.");
    }
  };

  return (
    <div>
      {/* Button to open modal */}
      <DropdownTable toggleModal={toggleModal} />
      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="closebtn">
              <img
                src={closebtn}
                alt="close btn"
                className="close-btn"
                onClick={toggleModal}
              />
            </div>

            {step === 1 && (
              <form onSubmit={handleSubmit}>
                <div className="networkDataplan">
                  <div>
                    <label>Network</label>
                    <select value={network} onChange={handleNetworkChange}>
                      <option value="">Choose your Network</option>
                      <option value="mtn">MTN</option>
                      <option value="airtel">Airtel</option>
                      <option value="glo">Glo</option>
                      <option value="9mobile">9Mobile</option>
                    </select>
                  </div>
                  <div>
                    <label>Data Plan</label>
                    <select value={plan} onChange={handlePlanChange}>
                      <option value="">Choose your Plan</option>
                      <option value="500MB">500MB</option>
                      <option value="1GB">1GB</option>
                      <option value="2GB">2GB</option>
                      <option value="3GB">3GB</option>
                      <option value="5GB">5GB</option>
                      <option value="10GB">10GB</option>
                    </select>
                  </div>
                </div>
                <div className="mobileNoAmt">
                  <div>
                    <label>Mobile Number</label>
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      value={phoneNumber}
                      className="phoneNumber"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>Amount</label>
                    <input
                      type="text"
                      value={amount || "Select a plan"}
                      readOnly
                    />
                  </div>
                </div>
                <div>
                  <label className="remindersCheckbox">
                    Want to be sent renewal reminders?
                    <input type="checkbox" />
                  </label>
                </div>
                <button type="submit" className="modalBtn">
                  Submit
                </button>
              </form>
            )}
            {step === 2 && (
              <div>
                <img
                  src={closebtn}
                  alt="close btn"
                  className="close-btn"
                  onClick={toggleModal}
                />
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
                    <div className="details-one">
                      <img
                        src={image}
                        alt="Payment Logo"
                        className="payment-logo"
                      />
                      <p>{phoneNumber}</p>
                      <p>Pay {amount}</p>
                    </div>
                    <div className="details-two">
                      <div>
                        {/* <p>Enter Card Details</p> */}
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
                    </div>

                    <span onClick={handleProcessPayment} className="pay-btn">
                      Pay {amount}
                    </span>
                  </div>
                )}
                {selectedPayment === "transfer" && (
                  <div className="transfer-details">
                    <div className="details-one">
                      <img
                        src={image}
                        alt="Payment Logo"
                        className="payment-logo"
                      />
                      <p>Transfer {amount} to Paystack</p>
                      {/* <p>Checkout</p> */}
                    </div>
                    <div className="details-two">
                      <div>
                        <p>BANK NAME</p>
                        <p>Paystack-Titan</p>
                      </div>
                      <div>
                        <p>ACCOUNT NUMBER</p>
                        <p>0012345234</p>
                      </div>
                      <div>
                        <p>AMOUNT</p>
                        <p>{amount}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: "10px" }}>
                      This account is for this transaction only and expires in{" "}
                      <span
                        style={{
                          color: isLessThanOneMinute ? "red" : "inherit",
                        }}
                      >
                        {formatTime(countdown)}
                      </span>
                    </p>
                    <span onClick={handleProcessPayment} className="pay-btn">
                      I've sent the money
                    </span>
                  </div>
                )}
              </div>
            )}
            {step === 3 && (
              <div className="trans-success">
                {/* Step 3: Transaction Successful */}
                <h3>Transaction Successful!</h3>
                {/* <p>Your payment has been processed successfully.</p> */}
                <img
                  src={checkbox}
                  alt="checkbox Logo"
                  className="checkbox-logo"
                  width={100}
                  style={{ margin: "0 auto" }}
                />
                <button
                  onClick={toggleModal}
                  className="modalBtn"
                  style={{
                    color: "white",
                    width: "200px",
                    margin: "0 auto",
                    fontSize: "18px",
                    marginTop: "20px",
                  }}
                >
                  Back to Home
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentFlow;
