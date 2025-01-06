import React, { useState } from "react";
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
import whatsappLogo from "../Images/whatsapp.png";

function SelectNetwork() {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const handleLogoClick = (network) => {
    if (selectedNetwork === network) {
      setSelectedNetwork(null);
    } else {
      setSelectedNetwork(network);
    }
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

      {/* Display Dropdown table when a network is selected */}
      {selectedNetwork && (
        <div className="dropdown-table">
          <table>
            <thead>
              <tr>
                <th>Data Plan</th>
                <th>Price</th>
                <th>Validity</th>
                <th>Buy Online</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10GB</td>
                <td>$10</td>
                <td>30 Days</td>
                <td>
                  <a href="https://example.com">Buy here</a>
                </td>
              </tr>
              <tr>
                <td>20GB</td>
                <td>$20</td>
                <td>60 Days</td>
                <td>
                  <a href="https://example.com">Buy here</a>
                </td>
              </tr>
              <tr>
                <td>50GB</td>
                <td>$50</td>
                <td>90 Days</td>
                <td>
                  <a href="https://example.com">Buy here</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {/* whatsapp logo */}
      <div className="whatsapp-logo">
        <a
          href="https://wa.me/234123456789"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappLogo} alt="Message Us" />
          Message Us
        </a>
      </div>
    </div>
  );
}

export default SelectNetwork;
