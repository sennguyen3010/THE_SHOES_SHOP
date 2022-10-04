import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../../components/Cart/Cart';
import CartMobile from '../../components/Cart/CartMobile';
import Notification from '../../components/Notification/Notification';
import ResponsiveItem from '../../hoc/ResponsiveItem';
import { postUserOrder } from '../../redux/reducers/productReducer';

export default function Carts() {
  let { arrOrder } = useSelector((state) => state.productReducer);
  let { userLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const submitOrder = () => {
    let result = arrOrder;
    let orderDetail = [];
    let infoOrder = {};

    result.map((item) => {
      let order = {
        productId: item.id,
        quantity: item.number,
      };
      orderDetail.push(order);
    });

    let valueOrder = { ...infoOrder, orderDetail, email: userLogin.email };

    if (orderDetail.length != 0) {
      const action = postUserOrder(valueOrder);
      dispatch(action);
    }
  };
  return (
    <section className="carts">
      <div className="container">
        <Notification />
        <div className="carts-layout">
          <h2 className="carts-title">Carts</h2>

          <ResponsiveItem component={Cart} componentMobile={CartMobile} />
          {/* <Cart /> */}

          <div className="text-end">
            <button className="carts-btn-order" onClick={submitOrder}>
              SUBMIT ORDER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
