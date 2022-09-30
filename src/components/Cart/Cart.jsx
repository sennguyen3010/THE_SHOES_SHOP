import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { getStoreJSON, PRODUCT_CART } from '../../util/config';

export default function Cart(props) {
  // const { item } = props;
  // console.log(item);

  let { arrOrder } = useSelector((state) => state.productReducer);
  // let result = getStoreJSON(PRODUCT_CART);
  // arrOrder = result;
  // (result ? result : arrOrder).map((item) => console.log(item));

  const renderCart = () => {
    return arrOrder?.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <input className="form-check-input carts-check" type="checkbox" defaultValue id="flexCheckDefault" />
          </td>
          <td>{item.id}</td>
          <td>
            <img className="carts-img" src={item.image} alt="..." />
          </td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            <button className="carts-btn-count btnSubmit">+</button>
            <span className="carts-amount">{item.number}</span>
            <button className="carts-btn-count btnSubmit">-</button>
          </td>
          <td>{item.number * item.price}</td>
          <td>
            <button className="carts-btn-action carts-btn-count btnSubmit me-2">EDIT</button>
            <button className="carts-btn-del carts-btn-action carts-btn-count btnSubmit">DELETE</button>
          </td>
        </tr>
      );
    });
  };

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
      <tbody>{renderCart()}</tbody>
    </table>
  );
}
