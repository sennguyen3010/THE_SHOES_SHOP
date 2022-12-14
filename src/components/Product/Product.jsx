import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useParams } from 'react-router-dom';
import { getProductDetailApi } from '../../redux/reducers/productReducer';

export default function Product(props) {
  const { prod } = props;

  return (
    <div className="d-flex col-12 col-md-6 col-lg-4">
      <div className="productFeature-item">
        <div className="productFeature-item-top">
          <div className="d-flex justify-content-end">
            <i className="far fa-heart productFeature-item-like"></i>
          </div>
          <div className="productFeature-item-img">
            <img src={prod?.image} alt="..." />
          </div>
          <h4>{prod?.alias}</h4>
          <p>{prod?.shortDescription}</p>
        </div>
        <div className="row">
          <div className="col-6 pe-0">
            <div className="productFeature-item-bottom bottom-bg-yellow">
              <NavLink to={`/detail/${prod?.id}`} className="productFeature-btn item-bottom-text">
                Buy now
              </NavLink>
            </div>
          </div>
          <div className="col-6 ps-0">
            <div className="productFeature-item-bottom bottom-bg-grey">
              <button className="productFeature-price item-bottom-text">{prod?.price} $</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
