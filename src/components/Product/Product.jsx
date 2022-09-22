import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getProductApi } from '../../redux/reducers/productReducer';

export default function Product() {
  const dispatch = useDispatch();
  const { arrProduct } = useSelector((state) => state.productReducer);
  const renderProduct = () => {
    return arrProduct?.map((prod, index) => {
      return (
        <div className="d-flex col-12 col-md-6 col-lg-4" key={index}>
          <div to="/" className="productFeature-item">
            <div className="productFeature-item-top">
              <div className="d-flex justify-content-end">
                <i className="far fa-heart productFeature-item-like"></i>
              </div>
              <div className="productFeature-item-img">
                <img src={prod.image} alt="..." />
              </div>
              <h4>{prod.alias}</h4>
              <p>{prod.shortDescription}</p>
            </div>
            <div className="row">
              <div className="col-6 pe-0">
                <div className="productFeature-item-bottom bottom-bg-yellow">
                  <NavLink to={`/detail/${prod.id}`} className="productFeature-btn item-bottom-text">
                    Buy now
                  </NavLink>
                </div>
              </div>
              <div className="col-6 ps-0">
                <div className="productFeature-item-bottom bottom-bg-grey">
                  <button className="productFeature-price item-bottom-text">{prod.price} $</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    const action = getProductApi();
    dispatch(action);
  }, []);
  return (
    <section className="productFeature">
      <div className="container">
        <div className="productFeature-layout">
          <h2 className="productFeature-title">Product Feature</h2>
          <div className="row gy-4 productFeature-group">{renderProduct()}</div>
        </div>
      </div>
    </section>
  );
}
