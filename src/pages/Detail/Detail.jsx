import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Product from '../../components/Product/Product';
import { getProductDetailApi } from '../../redux/reducers/productReducer';

export default function Detail() {
  const { productDetail } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    const action = getProductDetailApi(params.id);

    dispatch(action);
  }, [params.id]);

  const renderProductDetail = () => {
    return (
      <>
        <div className="product-detail-prod col-4">
          <img className="product-detail-img" src={productDetail?.image} alt="..." />
        </div>
        <div className="product-detail-content col-6">
          <h3 className="product-detail-title">{productDetail?.name}</h3>
          <p className="product-detail-des">{productDetail?.shortDescription}</p>
          <h3 className="product-detail-available">Available size</h3>
          <div className="product-detail-sizegroup">
            {productDetail?.size?.map((size, index) => {
              return (
                <p key={index} className="product-detail-size">
                  {size}
                </p>
              );
            })}
          </div>
          <p className="product-detail-price">{productDetail?.price}$</p>
          <div className="product-detail-count">
            <p className="product-detail-count-btn product-detail-size">+</p>
            <p className="product-detail-amount">1</p>
            <p className="product-detail-count-btn product-detail-size">-</p>
          </div>
          <button className="product-detail-add">Add to cart</button>
        </div>
      </>
    );
  };

  const renderRelatedProducts = () => {
    return productDetail?.relatedProducts?.map((prod, index) => {
      return <Product prod={prod} key={index} />;
    });
  };
  return (
    <>
      <section className="product-detail">
        <div className="container">
          <div className="product-detail__layout row justify-content-between">{renderProductDetail()}</div>
        </div>
      </section>

      <section className="productFeature">
        <div className="container">
          <div className="productFeature-layout">
            <h2 className="productFeature-title">Related Products</h2>
            <div className="row gy-4 productFeature-group">{renderRelatedProducts()}</div>
          </div>
        </div>
      </section>
    </>
  );
}
