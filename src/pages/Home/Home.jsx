import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/Carousel/Carousel';
import Product from '../../components/Product/Product';
import { getProductApi } from '../../redux/reducers/productReducer';

export default function Home() {
  const dispatch = useDispatch();
  const { arrProduct } = useSelector((state) => state.productReducer);
  const renderProduct = () => {
    return arrProduct?.map((prod, index) => {
      return <Product prod={prod} key={index} />;
    });
  };

  useEffect(() => {
    const action = getProductApi();
    dispatch(action);
  }, []);
  return (
    <>
      <Carousel />
      <section className="productFeature">
        <div className="container">
          <div className="productFeature-layout">
            <h2 className="productFeature-title">Product Feature</h2>
            <div className="row gy-4 productFeature-group">{renderProduct()}</div>
          </div>
        </div>
      </section>
    </>
  );
}
