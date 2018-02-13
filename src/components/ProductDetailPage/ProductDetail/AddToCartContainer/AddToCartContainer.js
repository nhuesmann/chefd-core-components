import React from 'react';

import AddToCartButton from './AddToCartButton/AddToCartButton';
import styles from './AddToCartContainer.scss';

function addToCartButton(props) {
  const buttons = props.variants.map(variant => (
    <AddToCartButton
      key={variant.sku}
      servings={variant.num_of_servings}
      price={+variant.retail_price}
      type="button"
    />
  ));

  return <div className={styles.container}>{buttons}</div>;
}

export default addToCartButton;
