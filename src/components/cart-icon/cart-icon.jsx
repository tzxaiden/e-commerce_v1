import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { CartContext } from '../../context/cart-context';
import shoppingBag from '../../assets/shopping-bag.png';
import './cart-icon.styles.scss';

const CartIcon = ({ history }) => {
  const { itemCount } = useContext(CartContext);
  return (
    <div className="cart-container"onClick={() => history.push('/cart')}>
      <img src={shoppingBag} alt='shopping-cart-icon' />
       
      {
        itemCount > 0 ? <span className='cart-count' id='lblCartCount'> { itemCount } </span> : null
      }
      
    </div>
  );
}

export default withRouter(CartIcon); 