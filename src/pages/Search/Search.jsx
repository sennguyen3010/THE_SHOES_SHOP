import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../../components/Product/Product';
import _ from 'lodash';

let timeout = null;

export default function Search() {
  const [search, setSearch] = useState({});
  const [arrProductSearch, setArrProductSearch] = useState([]);
  const [valueSort, setValueSort] = useState('desc');

  const handleChange = (e) => {
    const { value } = e.target;

    setSearch({
      keyword: value,
    });
  };

  const getProductByKeywordApi = async () => {
    try {
      const result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product?keyword=${search.keyword}`,
        method: 'GET',
      });
      // console.log(search.keyword);
      setArrProductSearch(result.data.content);
    } catch (err) {
      console.log(err);
    }
  };

  const renderProductSearch = () => {
    const resultAscendingPrice = _.sortBy(arrProductSearch, [(item) => item.price]);
    const resultDecreasePrice = _.reverse(_.sortBy(arrProductSearch, [(item) => item.price]));

    return (valueSort === 'desc' ? resultDecreasePrice : resultAscendingPrice).map((prod, index) => {
      return <Product prod={prod} key={index} />;
    });
  };

  useEffect(() => {
    timeout = setTimeout(() => {
      getProductByKeywordApi();
    }, 1000);
    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [search]);

  return (
    <section className="search">
      <div className="container">
        <p className="search-p">Search</p>
        <div>
          <input className="search-input" placeholder="Product name ..." onChange={handleChange} />
          <button className="search-btn btnSubmit">SEARCH</button>
          <h2 className="search-title productFeature-title mb-0">Search result</h2>
          <p className="search-p mt-4">Price</p>
          <select
            className="search-select search-input form-select"
            aria-label="Default select example"
            onChange={(e) => setValueSort(e.target.value)}
          >
            {/* giam */}
            <option value="desc">Decrease</option>
            {/* tang */}
            <option value="asc">Ascending</option>
          </select>
          <div className="row gy-4 productFeature-group">{renderProductSearch()}</div>
        </div>
      </div>
    </section>
  );
}
