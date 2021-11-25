import heroImg from '../../../img/big-hero2.jpg';
const Hero = () => {
  return (
    <div className="hero ">
      {/* <div className="hero-image hide-image">{heroImg}</div> */}
      <div className="hero-text container">
        <h1 className="tagline">Buy More Pay Less</h1>
        <p className="hero-details">
          Quality items, premium brands,fresh eatables &#8212; all for less than
          you'd expect.
        </p>
        <a href="/" className="btn">
          Shop the Collection
        </a>
      </div>
      <img src={heroImg} alt="Displayed items" className="hero-img" />
    </div>
  );
};

export default Hero;
