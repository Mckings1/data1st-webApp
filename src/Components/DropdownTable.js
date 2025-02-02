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
          {/* <!-- MTN --> */}
          <tr>
            <td>MTN 500MB</td>
            <td>#146</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>MTN 1GB</td>
            <td>#289</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>MTN 2GB</td>
            <td>#578</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>MTN 3GB</td>
            <td>#866</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>MTN 5GB</td>
            <td>#1443</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>MTN 10GB</td>
            <td>#2886</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>

          {/* <!-- Airtel --> */}
          <tr>
            <td>Airtel 500MB</td>
            <td>#161</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>Airtel 1GB</td>
            <td>#308</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>Airtel 2GB</td>
            <td>#615</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>Airtel 5GB</td>
            <td>#1538</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>Airtel 10GB</td>
            <td>#3075</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>

          {/* <!-- Glo --> */}
          <tr>
            <td>Glo 500MB</td>
            <td>#140</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>Glo 1GB</td>
            <td>#278</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>Glo 2GB</td>
            <td>#555</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>Glo 3GB</td>
            <td>#833</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>Glo 5GB</td>
            <td>#1388</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>Glo 10GB</td>
            <td>#2775</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>

          {/* <!-- 9Mobile --> */}
          <tr>
            <td>9Mobile 500MB</td>
            <td>#83</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>9Mobile 1GB</td>
            <td>#150</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>9Mobile 1.5GB</td>
            <td>#226</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>9Mobile 2GB</td>
            <td>#300</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>9Mobile 3GB</td>
            <td>#450</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>9Mobile 4GB</td>
            <td>#600</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>9Mobile 5GB</td>
            <td>#750</td>
            <td>30 Days</td>
            <td>
              <button onClick={toggleModal}>Buy Online Now</button>
            </td>
          </tr>
          <tr>
            <td>9Mobile 10GB</td>
            <td>#1499</td>
            <td>30 Days</td>
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
