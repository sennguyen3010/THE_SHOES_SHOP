import React from 'react';

export default function Detail() {
  const renderProductDetail = () => {
    return (
      <div>
        <div className="product-detail__img col-xl-4">
          <div className="bg-product">
            <img src="./img/image6.png" alt="..." />
          </div>
        </div>
        <div className="product-detail__content col-xl-6">
          <h3 className="product__name">name</h3>
          <p className="product__info">description</p>
          <p className="available-size">Available size</p>
          <ul className="product__size-selection btn-group" role="group" aria-label="Basic example">
            <li>
              <button type="button" className="btn">
                38
              </button>
            </li>
            <li>
              <button type="button" className="btn">
                39
              </button>
            </li>
            <li>
              <button type="button" className="btn">
                40
              </button>
            </li>
            <li>
              <button type="button" className="btn">
                41
              </button>
            </li>
            <li>
              <button type="button" className="btn">
                42
              </button>
            </li>
          </ul>
          <p className="product__price">price</p>
          <div className="product-amount">
            <button className="product-amount__plus" id="btnPlus">
              +
            </button>
            <span className="product-amount__selected">1</span>
            <button className="product-amount__minus" id="btnMinus">
              -
            </button>
          </div>
          <button className="btnProductAdd">Add to cart</button>
        </div>
      </div>
    );
  };
  return (
    <section className="product-detail">
      <div className="container">
        <div className="product-detail__layout row">{renderProductDetail()}</div>
      </div>
    </section>
  );
}
