import React from "react";

function trip() {
  return (
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">SL.No</th>
          <th scope="col">Place</th>
          <th scope="col">Package</th>
          <th scope="col">Days</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Kerala</td>
          <td>5000</td>
          <td>5 days</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Kashmir</td>
          <td>20000</td>
          <td>15 Days</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Chennai</td>
          <td>1000</td>
          <td>7 Days</td>
        </tr>
        <tr>
          <th scope="row"> 4</th>
          <td>Goa</td>
          <td>8000</td>
          <td>8 Days</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Hyderabad</td>
          <td>7000</td>
          <td>10Days</td>
        </tr>
        <tr>
          <th scope="row"> 6</th>
          <td>Mumbai</td>
          <td>9000</td>
          <td>12 days</td>
        </tr>
      </tbody>
    </table>
  );
}

export default trip;