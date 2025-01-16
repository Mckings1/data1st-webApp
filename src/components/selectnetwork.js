import React, { useState } from "react";
import PaymentFlow from "./PaymentFlow";
import DropdownTable from "./DropdownTable";

import network1 from "../Images/mtn_group_icon.png";
import network2 from "../Images/globacom_logo.png";
import network3 from "../Images/airtel_logo.png";
import network4 from "../Images/9mobileng_icon.png";
import network5 from "../Images/vodacomturns30_icon.png";
import network6 from "../Images/starlink_icon.png";
import network7 from "../Images/fiberone.png";
import network8 from "../Images/smile-logo 1.png";
import network9 from "../Images/swfitnglogo-removebg-preview 1.png";
import network10 from "../Images/spectranet_ng_logo.png";

function SelectNetwork() {
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleLogoClick = (network) => {
    if (selectedNetwork === network) {
      setSelectedNetwork(null);
    } else {
      setSelectedNetwork(network);
    }
  };

  const handleBuyOnlineClick = () => {
    setShowPaymentModal(true); // Open the payment modal
  };

  const handlePaymentSuccess = () => {
    alert("Payment successful!");
    setShowPaymentModal(false); // Close the payment modal
  };

  return (
    <div className="select-network-container">
      <h4 className="select-network">Select your network</h4>
      {/* Network logos */}
      <div className="network-logos">
        <div className="row network-image">
          {[network1, network2, network3, network4, network5].map(
            (network, index) => (
              <img
                key={index}
                src={network}
                alt={`Network ${index + 1}`}
                className={`network-logo ${
                  selectedNetwork === `Network ${index + 1}` ? "selected" : ""
                }`}
                onClick={() => handleLogoClick(`Network ${index + 1}`)}
              />
            )
          )}
        </div>
        <div className="row network-image">
          {[network6, network7, network8, network9, network10].map(
            (network, index) => (
              <img
                key={index + 5}
                src={network}
                alt={`Network ${index + 6}`}
                className={`network-logo ${
                  selectedNetwork === `Network ${index + 6}` ? "selected" : ""
                }`}
                onClick={() => handleLogoClick(`Network ${index + 6}`)}
              />
            )
          )}
        </div>
      </div>

      {/* Render DropdownTable when a network is selected */}
      {selectedNetwork && (
        <DropdownTable
          selectedNetwork={selectedNetwork}
          onBuyOnlineClick={handleBuyOnlineClick}
        />
      )}

      {/* Render PaymentFlow when the modal is triggered */}
      {showPaymentModal && (
        <PaymentFlow onPaymentSuccess={handlePaymentSuccess} />
      )}
    </div>
  );
}

export default SelectNetwork;
