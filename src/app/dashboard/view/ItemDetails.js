import { useParams, Link } from 'react-router-dom';
import useFetch from '../../../utilities/UseFetch';
import { useState, useEffect } from 'react';

const ItemDetails = () => {
  const [defaultQuantity, setDefaultQuantity] = useState(null);

  const { id } = useParams();

  const { items, isPending, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  // All categories
  const [category, setCategories] = useState(null);
  const [stillPending, setStillPending] = useState(true);
  const [errorCat, setErrorCat] = useState(null);

  const url =
    items && `https://fakestoreapi.com/products/category/${items.category}`;

  const itemList = category && category.filter(item => item.id !== Number(id));

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

  return (
    <div className="item-details">
      <div className="detail-hero">
        <p className="hero-price">{items && '$' + items.price}</p>
        <p className="hero-title">{items && items.title + '.'}</p>
      </div>
      <div className="details-flex section ">
        <div className="details-img">
          <div className="image-xl-container">
            {isPending && <div className="loading"></div>}
            {error && <div className="message">{error} 😫 </div>}
            {items && <img src={items.image} className="image-xl"></img>}
          </div>
          <div className=" mini-header-fix extra-margin-top">
            <h2>More In Category</h2>
          </div>
          <div className="other-images grid-3-cols">
            {stillPending && <div className="loading"></div>}
            {error && <div className="message">{error} 😫 </div>}
            {itemList &&
              itemList.map(itemOthers => (
                <Link to={`/details/${itemOthers.id}`} key={itemOthers.id}>
                  <div className="image-sm-container">
                    <img src={itemOthers.image} className="image-sm"></img>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <div className="details-content">
          {isPending && <div className="loading"></div>}
          <h2 className="details-content-header">INFO</h2>
          <p className="item-description extra-margin">
            {items && items.description}
          </p>
          <h2 className="details-content-header">ADD TO CART</h2>
          <form className="item-quantity">
            <label htmlFor="quantity" className="quantity-label">
              Quantity <span> ({items && items.rating.count})</span>
            </label>
            <input
              type="number"
              className="input-quantity"
              defaultValue="1"
              min="1"
              max={items && items.rating.count}
            />
            <button className="square-btn">ADD TO CART</button>
          </form>
        </div>
      </div>
      <div className=" section xl-margin-bottom">
        <h2 className="details-content-header">DESCRIPTION</h2>
        <p className="description-text">{items && items.description}</p>
      </div>
    </div>
  );
};

export default ItemDetails;
