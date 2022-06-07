import React from 'react'

const BgSlider = () => {
  return (
    <div> {/* Begin Slider Wrapper */}
    <div class="css-slider-wrapper">
      <input
        type="radio"
        name="slider"
        class="slide-radio1"
        checked
        id="slider_1"
      />
      <input
        type="radio"
        name="slider"
        class="slide-radio2"
        id="slider_2"
      />
      <input
        type="radio"
        name="slider"
        class="slide-radio3"
        id="slider_3"
      />
      <input
        type="radio"
        name="slider"
        class="slide-radio4"
        id="slider_4"
      />

      <div class="slider-pagination">
        <label for="slider_1" class="page1"></label>
        <label for="slider_2" class="page2"></label>
        <label for="slider_3" class="page3"></label>
        <label for="slider_4" class="page4"></label>
      </div>
      <div class="next control">
        <label for="slider_1" class="numb1">
          <i class="fa fa-arrow-circle-right"></i>
        </label>
        <label for="slider_2" class="numb2">
          <i class="fa fa-arrow-circle-right"></i>
        </label>
        <label for="slider_3" class="numb3">
          <i class="fa fa-arrow-circle-right"></i>
        </label>
        <label for="slider_4" class="numb4">
          <i class="fa fa-arrow-circle-right"></i>
        </label>
      </div>
      <div class="previous control">
        <label for="slider_1" class="numb1">
          <i class="fa fa-arrow-circle-left"></i>
        </label>
        <label for="slider_2" class="numb2">
          <i class="fa fa-arrow-circle-left"></i>
        </label>
        <label for="slider_3" class="numb3">
          <i class="fa fa-arrow-circle-left"></i>
        </label>
        <label for="slider_4" class="numb4">
          <i class="fa fa-arrow-circle-left"></i>
        </label>
      </div>

      {/**Slider 1 Home */}
      <div class="slider slide1">
        <img
          src={BGIMG}
          alt="backgroundImage"
          className="home__image slider slide1"
        />

        <div>
          <h2>Shop Here at</h2>
          <a href="/" class="button">
            Home
          </a>{" "}
          {/**Product Rows Start */}
          <div className="home__row">
            <Product />
            {/* Product  */}
            {/* Product  */}
          </div>
          <div className="home__row">
            {/* Product  */}
            {/* Product  */}
            {/* Product  */}
          </div>
          <div className="home__row">
            {/* Product  */}
            {/* Product  */}
          </div>
          {/*Product Rows End */}
        </div>
      </div>

      {/**Slider 2 */}

      <div class="slider slide2">
        <div>
          <h2>Shop Electronics</h2>
          <a href="/" class="button">
            Back
          </a>
        </div>
      </div>
      {/**Slider 3 */}

      <div class="slider slide3">
        <div>
          <h2>Shop Clothing</h2>
          <a href="/" class="button">
            Back
          </a>
        </div>
      </div>
      {/**Slider 4 */}

      <div class="slider slide4">
        <div>
          <h2>Shop for Appliancesr</h2>
          <a href="/" class="button">
            Back
          </a>
        </div>
      </div>
    </div>
    {/* End Slider Wrapper */}
</div>
  )
}

export default BgSlider