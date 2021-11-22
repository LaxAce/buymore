import useFetch from './UseFetch';
import useSlider from './UseSlider';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Departments = () => {
  // All products
  const { items, isPending, error } = useFetch(
    `https://fakestoreapi.com/products`
  );

  // All categories
  const [categories, setCategories] = useState(null);
  const [stillPending, setStillPending] = useState(true);
  const [errorCat, setErrorCat] = useState(null);

  const url = 'https://fakestoreapi.com/products/categories';

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) throw Error('Unable to fetch data...');
        return res.json();
      })
      .then(data => {
        setCategories(data);
        setStillPending(false);
        setErrorCat(null);
      })
      .catch(err => {
        console.log(err.message);
        setStillPending(false);
        setErrorCat(err.message);
      });
  }, [url]);

  // Next and Previous handler
  const { previous, next } = useSlider(
    'department',
    'department-back',
    'department-next'
  );

  return (
    <div className="by-category section extra-margin" id="department">
      <div className="mini-header">
        <h2>Shop by Departments</h2>
        <div className="arrow">
          <div className="arrow-back department-back" onClick={previous}>
            &#60;
          </div>
          <div className="arrow-front department-next" onClick={next}>
            &#62;
          </div>
        </div>
      </div>
      <div className="department flex">
        {isPending && <div className="loading"></div>}

        {error && <div className="message">{error} 😫 </div>}
        {items &&
          categories &&
          categories.map(category => (
            <div className="category-grid" key={category}>
              <Link to={`/${category}`}>
                <div className="image-cat-box">
                  <img
                    src={
                      items.filter(item => item.category === category)[1].image
                    }
                    alt="product"
                    className="category-image"
                  />
                </div>
                <p className="category-title ">
                  {' '}
                  {items
                    .filter(item => item.category === category)[1]
                    .category[0].toUpperCase() +
                    items
                      .filter(item => item.category === category)[1]
                      .category.slice(1)}
                </p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Departments;
