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

function SelectNetwork() {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const handleLogoClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="select-network-container">
      <h2 className="title">Select your network</h2>

      {/* Network logos */}
      <div className="network-logos">
        <div className="row">
          <img
            src={network1}
            alt="Network 1"
            className="network-logo"
            onClick={() => handleLogoClick("Network 1")}
          />
          <img
            src={network2}
            alt="Network 2"
            className="network-logo"
            onClick={() => handleLogoClick("Network 2")}
          />
          <img
            src={network3}
            alt="Network 3"
            className="network-logo"
            onClick={() => handleLogoClick("Network 3")}
          />
          <img
            src={network4}
            alt="Network 4"
            className="network-logo"
            onClick={() => handleLogoClick("Network 4")}
          />
          <img
            src={network5}
            alt="Network 5"
            className="network-logo"
            onClick={() => handleLogoClick("Network 5")}
          />
        </div>
        <div className="row">
          <img
            src={network6}
            alt="Network 6"
            className="network-logo"
            onClick={() => handleLogoClick("Network 6")}
          />
          <img
            src={network7}
            alt="Network 7"
            className="network-logo"
            onClick={() => handleLogoClick("Network 7")}
          />
          <img
            src={network8}
            alt="Network 8"
            className="network-logo"
            onClick={() => handleLogoClick("Network 8")}
          />
          <img
            src={network9}
            alt="Network 9"
            className="network-logo"
            onClick={() => handleLogoClick("Network 9")}
          />
          <img
            src={network10}
            alt="Network 10"
            className="network-logo"
            onClick={() => handleLogoClick("Network 10")}
          />
        </div>
      </div>

      {/* Display Dropdown table when a network is selected */}
      {selectedNetwork && (
        <div className="dropdown-table">
          <h3>{selectedNetwork} Details</h3>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data Plan</td>
                <td>10GB</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>$10</td>
              </tr>
              <tr>
                <td>Validity</td>
                <td>30 Days</td>
              </tr>

              <tr>
                <td>Buy Online</td>
                <td>Buy here</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default SelectNetwork;
