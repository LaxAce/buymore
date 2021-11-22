import premium from './img/premium.png';
import star from './img/star.png';
import flower from './img/flower.png';

const Features = () => {
  return (
    <div className="features">
      <div className="quality-feature">
        <img src={premium} alt="Premium sign" className="feature-icon" />
        <div className="flex-features">
          <h3>Premium Quality</h3>
          <p className="quality-text">
            We rigorously test every product to ensure it meets or exceeds the
            quality of top brands. If it doesn't, we won't sell it.
          </p>
        </div>
      </div>
      <div className="cost-feature">
        <img src={star} alt="low cost sign" className="feature-icon" />
        <div className="flex-features">
          <h3>Unparalleled Prices</h3>
          <p className="cost-text">
            We've eliminated traditional brand and retail markups, which means
            you pay 50-80% less for the exact same quality.
          </p>
        </div>
      </div>
      <div className="source-feature">
        <img src={flower} alt="source sign" className="feature-icon" />
        <div className="flex-features">
          <h3>Straight From the Source</h3>
          <p className="source-text">
            Shopping on Italic means supporting a network of independent
            manufacturers (the same ones behind your favorite brands).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
