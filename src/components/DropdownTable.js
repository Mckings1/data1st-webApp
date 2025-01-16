import React from "react";

function DropdownTable({ toggleModal }) {
  return (
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
            <td>1GB</td>
            <td>#200</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>2GB</td>
            <td>#200</td>
            <td>60 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>5GB</td>
            <td>#200</td>
            <td>90 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DropdownTable;
