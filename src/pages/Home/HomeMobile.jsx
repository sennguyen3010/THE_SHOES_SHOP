import React from 'react';
import Product from '../../components/Product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { getProductApi } from '../../redux/reducers/productReducer';

export default function HomeMobile() {
  const dispatch = useDispatch();
  const { arrProduct } = useSelector((state) => state.productReducer);
  // console.log(arrProduct);

  useEffect(() => {
    const action = getProductApi();
    dispatch(action);
  }, []);

  const renderProduct = () => {
    return arrProduct.map((prod, index) => {
      return (
        <div className="d-flex mt-2" key={index}>
          <div className="w-25">
            <img className="w-100" src={prod.image} alt="" />
          </div>
          <div className="w-75">
            <h3>{prod.name}</h3>
            <p>{prod.description}</p>
          </div>
          <NavLink className="btn btn-dark" to={`/detail/${prod.id}`}>
            Detail
          </NavLink>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <h3>Shoes app</h3>
      <div className="row">
        {renderProduct()}
        {/* <div className="col-3">
          <Product />
        </div>
        <div className="col-3">
          <Product />
        </div>
        <div className="col-3">
          <Product />
        </div>
        <div className="col-3">
          <Product />
        </div> */}
      </div>
    </div>
  );
}
