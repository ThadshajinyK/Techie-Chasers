import React from "react";
import Table from "react-bootstrap/Table";

function MoreInformation() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>More Information</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1) Client Mareen is registered 12/10/2023 12.53PM.</td>
        </tr>
        <tr>
          <td>2) Client Ruwan shutdown his server.</td>
        </tr>
        <tr>
          <td>3) Client Raj is registered 11/10/2023 5.43AM</td>
        </tr>
        <tr>
          <td>4) Client Chris shutdown her server.</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MoreInformation;
