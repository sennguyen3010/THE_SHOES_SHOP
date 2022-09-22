import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductApi } from '../../redux/reducers/productReducer';

export default function Product() {
  const dispatch = useDispatch();
  const { arrProduct } = useSelector((state) => state.productReducer);
  console.log(arrProduct);
  const renderProduct = () => {};

  useEffect(() => {
    const action = getProductApi();
    dispatch(action);
  }, []);
  return (
    <section className="productFeature">
      <div className="container">
        <div className="productFeature-layout">
          <h2 className="productFeature-title">Product Feature</h2>
          <div className="row gy-4 productFeature-group">
            <div className="col-12 col-md-6 col-lg-4">
              <a href="#" className="productFeature-item">
                <div className="productFeature-item-top">
                  <div className="d-flex justify-content-end">
                    <i className="far fa-heart productFeature-item-like"></i>
                  </div>
                  <div className="productFeature-item-img">
                    <img src="./img/image 5.png" alt="..." />
                  </div>
                  <h4>alias</h4>
                  <p>shortDescription</p>
                </div>
                <div className="row">
                  <div className="col-6 pe-0">
                    <div className="productFeature-item-bottom bottom-bg-yellow">
                      <button className="productFeature-btn item-bottom-text">Buy now</button>
                    </div>
                  </div>
                  <div className="col-6 ps-0">
                    <div className="productFeature-item-bottom bottom-bg-grey">
                      <button className="productFeature-price item-bottom-text">price</button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
