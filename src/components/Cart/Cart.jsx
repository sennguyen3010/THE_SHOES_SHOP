import React from 'react';

export default function Cart() {
  return (
    <table className="table text-center align-middle">
      <thead className="carts-thead">
        <tr>
          <th scope="col">
            <input className="form-check-input carts-check" type="checkbox" defaultValue id="flexCheckDefault" />
          </th>
          <th scope="col">Id</th>
          <th scope="col">Img</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input className="form-check-input carts-check" type="checkbox" defaultValue id="flexCheckDefault" />
          </td>
          <td>1</td>
          <td>
            <img className="carts-img" src="./img/image5.png" alt="..." />
          </td>
          <td>Product 1</td>
          <td>1000</td>
          <td>
            <button className="carts-btn-count btnSubmit">+</button>
            <span className="carts-amount">1</span>
            <button className="carts-btn-count btnSubmit">-</button>
          </td>
          <td>1000</td>
          <td>
            <button className="carts-btn-action carts-btn-count btnSubmit me-2">EDIT</button>
            <button className="carts-btn-del carts-btn-action carts-btn-count btnSubmit">DELETE</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
