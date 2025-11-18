import React from 'react'
import image1 from "./../assets/image1.jpg";
import "./../App.css";

const Carosel = () => {
  return (
    <>
    <section className="mx-auto ">
        <div className="sm:mx-10 p-3 flex justify-between flex-row mb-10 mt-20">
          <h2 className="text-4xl uppercase">
            Join <span className="lowercase italic">our</span> community
          </h2>

          <button className="uppercase text-2xl border-b-2 border-[#363636]">
            Follow us on instagram
          </button>
        </div>
          <div className="flex md:grid md:grid-cols-4 gap-4 mx-auto w-auto">
            <div className="product-card__image">
              <img src={image1} alt="product" />
            </div>
            <div className="product-card__image">
              <img src={image1} alt="product" />
            </div>
            <div className="product-card__image">
              <img src={image1} alt="product" />
            </div>
            <div className="product-card__image">
              <img src={image1} alt="product" />
            </div>
          </div>
      </section>
    </>
  )
}

export default Carosel