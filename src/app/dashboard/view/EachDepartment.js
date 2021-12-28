import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useFetch from '../../../providers/utilities/UseFetch';

const EachDepartment = () => {
  const { id } = useParams();

  const { items, isPending, error } = useFetch(
    `https://fakestoreapi.com/products/category/${id}`
  );

  return (
    <div className="each-department">
      <div className="department-hero ">
        <p className="hero-title">
          {items &&
            items[0].category[0].toUpperCase() +
              items[0].category.slice(1) +
              '.'}
        </p>
      </div>
      <div className="section">
        <div className=" mini-department-header mini-header">
          <h2>
            {' '}
            {items &&
              items[0].category[0].toUpperCase() + items[0].category.slice(1)}
          </h2>
          <div className="items-number">
            <p>{items && items.length}</p>
          </div>
        </div>
        <div className="our-best grid grid-4-cols xl-margin-bottom ">
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
    </div>
  );
};

export default EachDepartment;
