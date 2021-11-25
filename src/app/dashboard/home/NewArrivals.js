import useSlider from '../../../utilities/UseSlider';
import useFetch from '../../../utilities/UseFetch';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  const { items, isPending, error } = useFetch(
    'https://fakestoreapi.com/products'
  );
  //  Next and Previous Click
  const { previous, next } = useSlider(
    'new-items',
    'arrow-back',
    'arrow-front'
  );

  return (
    <div className="newArrivals section" id="new-arrivals">
      <div className="mini-header">
        <h2>New Arrivals</h2>
        <div className="arrow">
          <div className="arrow-back" onClick={previous}>
            &#60;
          </div>
          <div className="arrow-front" onClick={next}>
            &#62;
          </div>
        </div>
      </div>
      <div className="new-items flex ">
        {isPending && <div className="loading"></div>}
        {error && <div className="message">{error} 😫 </div>}
        {items &&
          items.map(item => (
            <div className="box" key={item.id}>
              <Link to={`/details/${item.id}`}>
                <div className="small-img">
                  <img src={item.image} alt="item " className="item-image" />
                </div>

                <div className="inner-box">
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

export default NewArrivals;
