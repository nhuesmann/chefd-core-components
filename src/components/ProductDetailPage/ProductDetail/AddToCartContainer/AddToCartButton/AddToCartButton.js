import React from 'react';
import PropTypes from 'prop-types';

import styles from './AddToCartButton.scss';

function button(props) {
  /*
  props:
    - type: button, reset, submit (button is default)
    - method: get, post (post is default)
    - disabled: Boolean
    - name: string
    - servings: integer
    - price: integer

  */

  return (
    <button
      className={styles.button}
      type={props.type}
      disabled={props.disabled}
    >
      <span className={styles.price}>${props.price}</span>
      for
      <span className={styles.servings}>{props.servings}</span>
      <span className={styles.addToCart}>Add to Cart</span>
    </button>
  );
}

button.defaultProps = {
  type: 'button',
  method: 'post',
};

button.propTypes = {
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  method: PropTypes.oneOf(['get', 'post']),
  disabled: PropTypes.bool,
};

export default button;
