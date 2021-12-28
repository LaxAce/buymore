import { useEffect, useState } from 'react';

const Cart = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('https://buymore-backend.herokuapp.com/api/v1/carts', {
      headers: { 'x-access-token': localStorage.getItem('authToken') },
    })
      .then(res => res.json())
      .then(res => {
        setData(res);
        console.log(res);

        console.log(data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <div> This is your Cart</div>
      <p>lorem ilkjka;lk iidjk alkjdskalj lkaj d;akj ;dsjk sd;lsdj slk</p>
    </>
  );
};

export default Cart;
