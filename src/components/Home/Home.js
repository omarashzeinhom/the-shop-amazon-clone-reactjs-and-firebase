import React from "react";
import "./Home.css";
import Product from "../Product/Product";
//images import

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          {/* Optimize performance here */}
          <video
            autoPlay={true}
            muted={true}
            loop={false}
            className="home__image"
            loading="lazy"
            alt="home__bgimg"
            src="https://res.cloudinary.com/dxgqvvg0z/video/upload/v1652438971/theshop/background_xzzhgy.mp4"
            type="video/mp4"
          />
          {/* Optimize performance here */}
        </div>

        <div className="home__row">
          <Product
            //id
            id="0000001"
            // Name
            title="Ultra Last Instant Colour Lipstick"
            //Price
            price={19.99}
            //Rating
            rating={4}
            //Image
            image="https://res.cloudinary.com/du9aympvd/image/upload/v1652280154/product1_fcepwt.webp"
          />
          <Product
            id="0000002"
            title="Bags for Women Handbags Purse Ladies Boho Shoulder Bag Crossbody Purses Faux"
            price={79.99}
            image="https://res.cloudinary.com/du9aympvd/image/upload/v1652280152/product_2_n1hlhj.webp"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="0000003"
            title="USB Flash Drive 8GB"
            price={3.99}
            image="https://res.cloudinary.com/du9aympvd/image/upload/v1652279961/pexels-eprism-studio-335257_p96vx2.webp"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="0000004"
            title="Brand COOLPIC P500 8GBDigital Camera"
            price={99.99}
            image="https://res.cloudinary.com/du9aympvd/image/upload/v1652279962/pexels-math-90946_isoyso.webp"
            rating={2}
          />
        </div>
      </div>
      {/* End home and home__container*/}
    </div>
  );
}

export default Home;
