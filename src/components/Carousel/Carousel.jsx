import React from 'react';
import { images } from '../../assets/img';

export default function Carousel() {
  return (
    <section className="carousels">
      <div className="carousel-layout container">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators carousel-circle">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active carousel-circle-item"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              className="carousel-circle-item"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            />

            <button
              className="carousel-circle-item"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner carousel-layout-pd">
            <div className="carousel-overflow overflow-hidden">
              {/* item1 */}
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="carousel-item_card row align-items-center justify-content-center">
                  <div className="col-12 col-lg-9">
                    <img src="./img/image9.png" className="d-block" alt="hinhanh" />
                  </div>
                  <div className="carousel-content col-12 col-lg-3">
                    <div>
                      <h5>Product name</h5>
                      <p>Product description ...</p>
                      <div className="carousel-button">
                        <a className="carousel-btn_buy" href="/#">
                          Buy now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* item2 */}
              <div className="carousel-item" data-bs-interval="20000">
                <div className="carousel-item_card row align-items-center justify-content-center">
                  <div className="col-12 col-lg-9">
                    <img src="./img/image9.png" className="d-block" alt="hinhanh" />
                  </div>
                  <div className="carousel-content col-12 col-lg-3">
                    <div>
                      <h5>Product name</h5>
                      <p>Product description ...</p>
                      <div className="carousel-button">
                        <a className="carousel-btn_buy" href="/#">
                          Buy now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* item3 */}
              <div className="carousel-item" data-bs-interval="20000">
                <div className="carousel-item_card row align-items-center justify-content-center">
                  <div className="col-12 col-lg-9">
                    <img src="./img/image9.png" className="d-block" alt="hinhanh" />
                  </div>
                  <div className="carousel-content col-12 col-lg-3">
                    <div>
                      <h5>Product name</h5>
                      <p>Product description ...</p>
                      <div className="carousel-button">
                        <a className="carousel-btn_buy" href="/#">
                          Buy now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev justify-content-start carousel-btn-pre"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-btn_icon" aria-hidden="true">
              <img src={images.pre} alt="button" />
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next justify-content-end carousel-btn-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-btn_icon" aria-hidden="true">
              <img src={images.next} alt="button" />
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
