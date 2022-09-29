import React from 'react';
import Product from '../../components/Product/Product';

export default function Search() {
  return (
    <section className="search">
      <div className="container">
        <p className="search-p">Search</p>
        <div>
          <input className="search-input" placeholder="Product name ..." />
          <button className="search-btn btnSubmit">SEARCH</button>
          <h2 className="search-title productFeature-title mb-0">Search result</h2>
          <p className="search-p mt-4">Price</p>
          <select className="search-select search-input form-select" aria-label="Default select example">
            <option value="decrease">Decrease</option>
            <option value="ascending">Ascending</option>
          </select>

          <Product />
        </div>
      </div>
    </section>
  );
}
