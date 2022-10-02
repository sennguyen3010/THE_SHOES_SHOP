import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { history } from '../..';
import Product from '../../components/Product/Product';
import { getProductDetailApi, setAddToCart, setAmount } from '../../redux/reducers/productReducer';

export default function Detail() {
  let { productDetail } = useSelector((state) => state.productReducer);
  let { userLogin } = useSelector((state) => state.userReducer);
  // let newProductDetail = { ...productDetail, number: 1 };
  // console.log(newProductDetail);
  //
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    const action = getProductDetailApi(params.id);

    dispatch(action);
  }, [params.id]);

  const amount = (value) => {
    const action = setAmount(value);
    dispatch(action);
  };

  const addToCart = (productDetail) => {
    if (userLogin) {
      const action = setAddToCart(productDetail);
      dispatch(action);
    } else {
      alert('vui lòng đăng nhập!');
      history.push('/login');
    }
  };

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
            <button className="product-detail-count-btn product-detail-size" onClick={() => amount(true)}>
              +
            </button>
            <p className="product-detail-amount">{productDetail.number || 1}</p>
            <button className="product-detail-count-btn product-detail-size" onClick={() => amount(false)}>
              -
            </button>
          </div>
          <button className="product-detail-add" onClick={() => addToCart(productDetail)}>
            Add to cart
          </button>
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
