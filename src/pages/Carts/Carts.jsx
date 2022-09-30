import React from 'react';
import Cart from '../../components/Cart/Cart';

export default function Carts() {
  return (
    <section className="carts">
      <div className="container">
        <div className="carts-layout">
          <h2 className="carts-title">Carts</h2>

          <Cart />

          <div className="text-end">
            <button className="carts-btn-order">SUBMIT ORDER</button>
          </div>
        </div>
      </div>
    </section>
  );
}
