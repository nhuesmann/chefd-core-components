import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductDetail.scss';

import AddToCartContainer from './AddToCartContainer/AddToCartContainer';
import Stars from './Stars/Stars';

function productDetail(props) {
  // new will feed off of props flag

  return (
    <div className={styles.container}>
      {/* <p className={styles.newFlag}>New!</p> */}
      <h1 className={styles.heading}>
        <span className={styles.heading__title}>{props.product.title}</span>
        <span className={styles.heading__subtitle}>
          {props.product.subtitle}
        </span>
      </h1>
      <div className={styles.metricsRow}>
        <Stars rating={props.product.rating} />
        <p className={styles.reviewCount}>20 Reviews</p>
      </div>
      <AddToCartContainer variants={props.product.variants} />
    </div>
  );
}

productDetail.propTypes = {
  product: PropTypes.object,
};

export default productDetail;
