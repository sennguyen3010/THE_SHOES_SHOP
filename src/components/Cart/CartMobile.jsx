import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductCart, setAmountCart } from '../../redux/reducers/productReducer';

export default function CartMobile(props) {
  let { arrOrder } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const amount = (masp, value) => {
    const action = setAmountCart({ masp, value });
    dispatch(action);
  };

  const deleteProduct = (masp) => {
    const action = deleteProductCart(masp);
    dispatch(action);
  };

  return arrOrder.map((item, index) => {
    return (
      <div key={index} className="cartMobile">
        <div className="cartMobile-layout row">
          <div className="col-4">
            <div className="cartMobile-image d-flex align-items-center justify-content-around">
              <input className="form-check-input carts-check" type="checkbox" defaultValue id="flexCheckDefault" />
              <img className="carts-img cartMobile-img" src={item.image} alt="..." />
            </div>
          </div>
          <div className="col-8 d-flex justify-content-between align-items-center">
            <div className="cartMobile-content">
              <p className="cartMobile-content_name">{item.name}</p>
              <p className="cartMobile-content_price">{item.price} $</p>
              <button className="carts-btn-count btnSubmit" onClick={() => amount(item.id, true)}>
                +
              </button>
              <span className="carts-amount">{item.number}</span>
              <button className="carts-btn-count btnSubmit" onClick={() => amount(item.id, false)}>
                -
              </button>
              <div className="mt-4">
                <span>Total: </span> <span className="cartMobile-content_price">{item.number * item.price} $</span>
              </div>
            </div>
            <button className="cartMobile-btn-del" onClick={() => deleteProduct(item.id)}>
              DELETE
            </button>
          </div>
        </div>
      </div>
    );
  });
}
