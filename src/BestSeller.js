import useSlider from './UseSlider';
import useFetch from './UseFetch';
import { Link } from 'react-router-dom';

const BestSeller = () => {
  const { items, isPending, error } = useFetch(
    `https://fakestoreapi.com/products?sort=desc`
  );

  const newItems = items && items.filter(item => item.rating.rate > 4);

  const { previous, next } = useSlider('our-best', 'best-back', 'best-next');

  return (
    <div className="best-seller section extra-margin" id="best-seller">
      <div className="mini-header">
        <h2>Our Best Sellers</h2>
        <div className="arrow">
          <div className="arrow-back best-back" onClick={previous}>
            &#60;
          </div>
          <div className="arrow-front best-next" onClick={next}>
            &#62;
          </div>
        </div>
      </div>
      <div className="our-best flex ">
        {isPending && <div className="loading"></div>}

        {error && <div className="message">{error} 😫 </div>}
        {newItems &&
          newItems.map(item => (
            <div className="box" key={item.id}>
              <Link to={`/details/${item.id}`}>
                <div className="small-img">
                  <img src={item.image} alt="item " className="item-image" />
                </div>

                <div className="inner-box">
                  <div className="item-rating">
                    <span className="star-icon">&#9733;</span>
                    <span className="rate">{item.rating.rate}</span>
                    <span className="count">({item.rating.count})</span>
                  </div>
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-category">{item.category}</p>
                  <p className="item-price">
                    $<span className="price-fig">{item.price}</span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
